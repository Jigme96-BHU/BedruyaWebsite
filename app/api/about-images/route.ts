import { NextResponse } from "next/server";

// Add or remove image filenames here when you update the /public/images/ folder
const IMAGES = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/activity5.jpg",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
];

export async function GET() {
  return NextResponse.json(IMAGES);
}
