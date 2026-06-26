import { NextResponse } from "next/server";

const SLIDES = ["/mobileslides/mobileview.png", "/mobileslides/mobileview2.png", "/mobileslides/mobileview3.png"];

export async function GET() {
  return NextResponse.json(SLIDES);
}
