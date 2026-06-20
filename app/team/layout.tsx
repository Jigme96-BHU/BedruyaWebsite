import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Dema, Karma, and Sonam — the experienced Registered Nurses and leaders behind Bedurya Community Care. Guided by compassion, clinical expertise, and a genuine commitment to NDIS participants.",
  openGraph: {
    title: "Our Team | Bedurya Community Care",
    description:
      "Meet the experienced Registered Nurses and leaders behind Bedurya Community Care.",
    images: [{ url: "/team/dema.jpg", width: 1200, height: 630, alt: "Bedurya Community Care team" }],
  },
  alternates: { canonical: "/team" },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
