import dims from "@/content/image-dimensions.generated.json";

type Dim = { w: number; h: number };
const map = dims as Record<string, Dim>;

export function imageSize(src: string): Dim {
  const d = map[src];
  if (!d) {
    throw new Error(
      `No dimensions for ${src}. Run \`npm run build:dims\` after adding the image.`,
    );
  }
  return d;
}
