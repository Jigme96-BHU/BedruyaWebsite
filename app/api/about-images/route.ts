import { NextResponse } from "next/server";
import { aboutSlideshowImages } from "@/lib/site-images";

export async function GET() {
  return NextResponse.json(aboutSlideshowImages);
}
