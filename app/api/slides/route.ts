import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const slidesDir = path.join(process.cwd(), "public", "slides");
  const files = fs.readdirSync(slidesDir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/slides/${f}`);
  return NextResponse.json(files);
}
