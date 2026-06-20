import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bedurya Community Care. Call us, send a message, or visit us — we serve participants across the ACT and Queanbeyan and are ready to support your NDIS journey.",
  openGraph: {
    title: "Contact Us | Bedurya Community Care",
    description:
      "Reach out to Bedurya Community Care for NDIS support across ACT & Queanbeyan.",
    images: [{ url: "/images/activity1.jpg", width: 1200, height: 630, alt: "Contact Bedurya Community Care" }],
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
