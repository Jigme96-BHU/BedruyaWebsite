import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bedurya Community Care — a nurse-led NDIS provider inspired by the Medicine Buddha. Serving ACT & Queanbeyan with compassion, expertise, and genuine person-centred care.",
  openGraph: {
    title: "About Us | Bedurya Community Care",
    description:
      "Learn about Bedurya Community Care — a nurse-led NDIS provider inspired by the Medicine Buddha.",
    images: [{ url: "/images/activity2.jpg", width: 1200, height: 630, alt: "Bedurya Community Care team" }],
  },
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
