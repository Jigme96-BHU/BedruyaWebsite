import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bedurya Community Care | NDIS & DVA Provider – ACT & Queanbeyan",
    template: "%s | Bedurya Community Care",
  },
  description:
    "Bedurya Community Care is a registered NDIS and DVA provider serving the ACT and Queanbeyan. Person-centred disability support, nursing care, and community services led by Registered Nurses.",
  keywords: [
    "NDIS provider ACT",
    "disability support Canberra",
    "community care Queanbeyan",
    "DVA provider",
    "nursing care home",
    "supported independent living",
    "NDIS registered provider",
    "disability support worker ACT",
  ],
  authors: [{ name: "Bedurya Community Care" }],
  creator: "Bedurya Community Care",
  metadataBase: new URL("https://bedurya.com.au"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://bedurya.com.au",
    siteName: "Bedurya Community Care",
    title: "Bedurya Community Care | NDIS & DVA Provider – ACT & Queanbeyan",
    description:
      "Compassionate, nurse-led NDIS support across the ACT and Queanbeyan. Daily living, community, nursing, and supported independent living services.",
    images: [
      {
        url: "/images/activity1.jpg",
        width: 1200,
        height: 630,
        alt: "Bedurya Community Care – NDIS Support ACT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedurya Community Care | NDIS & DVA Provider – ACT & Queanbeyan",
    description:
      "Compassionate, nurse-led NDIS support across the ACT and Queanbeyan.",
    images: ["/images/activity1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
