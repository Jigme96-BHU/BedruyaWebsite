import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Bedurya offers daily living support, community participation, health & wellbeing, supported independent living (SIL), and nursing & clinical care — all led by Registered Nurses across ACT & Queanbeyan.",
  openGraph: {
    title: "Our Services | Bedurya Community Care",
    description:
      "NDIS support services including daily living, SIL, nursing care, community participation, and health & wellbeing — led by Registered Nurses.",
    images: [{ url: "/images/activity3.jpg", width: 1200, height: 630, alt: "Bedurya NDIS support services" }],
  },
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
