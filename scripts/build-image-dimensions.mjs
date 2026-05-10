// Walk public/images and emit src/content/image-dimensions.generated.json,
// mapping each web path (e.g. "/images/cases/foo/hero.jpg") to its pixel
// dimensions. PhotoSwipe needs width/height up front to size the zoom canvas.
//
// Run via `npm run build:dims` or automatically via `prebuild`.

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { imageSize } from "image-size";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_IMAGES = path.join(ROOT, "public", "images");
const OUT = path.join(ROOT, "src", "content", "image-dimensions.generated.json");
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXTS.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

async function main() {
  const map = {};
  for await (const file of walk(PUBLIC_IMAGES)) {
    const buf = await readFile(file);
    const { width, height } = imageSize(buf);
    if (!width || !height) throw new Error(`Could not size ${file}`);
    const webPath = "/" + path.relative(path.join(ROOT, "public"), file).split(path.sep).join("/");
    map[webPath] = { w: width, h: height };
  }
  const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(OUT, JSON.stringify(sorted, null, 2) + "\n");
  console.log(`Wrote ${Object.keys(sorted).length} entries to ${path.relative(ROOT, OUT)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
