import { NextResponse } from "next/server";

const SLIDES = ["/slides/new1.png", "/slides/new2.png", "/slides/new3.png"];

export async function GET() {
  return NextResponse.json(SLIDES);
}
