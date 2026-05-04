// Resize and re-encode source case photos from `materials/<n>/` into
// `public/images/cases/<slug>/`. Run after the doctor swaps source photos:
//   node scripts/build-case-images.mjs
//
// Source layout per folder:
//   hero.JPG, before.JPG, 3.JPG, 4.JPG, 5.JPG (numbered files optional)
// Output layout per slug:
//   hero.jpg, stage-1.jpg, stage-2.jpg, stage-3.jpg, stage-4.jpg
//
// Hero is sized for a ~60vw desktop slot; stages for a quarter of that.
// Next.js Image will produce WebP/AVIF variants from these at request time —
// the static source just needs to be reasonably small.

import { mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "materials");
const OUT = path.join(ROOT, "public", "images", "cases");

// materials/<n> → slug
const SLUGS = {
  1: "full-arch-implants",
  2: "ceramic-veneers",
  3: "posterior-implants",
  4: "smile-rehab",
};

// Order of stage files (left → right in the strip). Files that don't exist
// in a folder are skipped silently.
const STAGE_ORDER = ["before.JPG", "3.JPG", "4.JPG", "5.JPG"];

// Sized for crisp full-screen viewing in the lightbox on large displays
// (the on-page tiles request smaller variants automatically via Next/Image).
const HERO = { width: 2800, quality: 82 };
const STAGE = { width: 2000, quality: 80 };

async function encode(srcPath, outPath, { width, quality }) {
  await sharp(srcPath)
    .rotate() // honour EXIF orientation
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outPath);
}

async function processCase(folder, slug) {
  const srcDir = path.join(SRC, folder);
  const outDir = path.join(OUT, slug);

  if (!existsSync(srcDir)) {
    console.warn(`skip ${folder}: source missing`);
    return;
  }

  // Wipe and recreate so removed photos don't linger.
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const heroSrc = path.join(srcDir, "hero.JPG");
  if (!existsSync(heroSrc)) {
    throw new Error(`${folder}: hero.JPG missing`);
  }
  await encode(heroSrc, path.join(outDir, "hero.jpg"), HERO);
  console.log(`  ${slug}/hero.jpg`);

  const present = new Set(await readdir(srcDir));
  let n = 1;
  for (const name of STAGE_ORDER) {
    if (!present.has(name)) continue;
    const out = `stage-${n}.jpg`;
    await encode(path.join(srcDir, name), path.join(outDir, out), STAGE);
    console.log(`  ${slug}/${out} ← ${name}`);
    n += 1;
  }
}

async function main() {
  console.log("Building case images:");
  for (const [folder, slug] of Object.entries(SLUGS)) {
    console.log(`materials/${folder} → public/images/cases/${slug}`);
    await processCase(folder, slug);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
