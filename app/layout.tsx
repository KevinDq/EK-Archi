import "./globals.css";
import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://archi-qimt.vercel.app"),
  title: "Emilie Kinnoo | Architecte",
  description:
    "Découvrez les projets architecturaux d'Emilie Kinnoo' : maisons contemporaines, villas design et espaces uniques.",
  keywords: ["architecte", "architecture moderne", "portfolio", "Emilie Kinnoo", "design"],
  authors: [{ name: "Emilie Kinnoo" }],
  robots: "index, follow",
  openGraph: {
    title: "Emilie Kinnoo | Architecte",
    description:
      "Un portfolio moderne présentant les réalisations architecturales d'Emilie Kinnoo.",
    url: "https://archi-qimt.vercel.app",
    siteName: "Portfolio Emilie Kinnoo",
    images: [
      {
        url: "/images/maison-indivuelle-1.jpg",
        width: 1200,
        height: 630,
        alt: "Image d'une villa moderne",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emilie Kinnoo | Architecte",
    description: "Découvrez les projets architecturaux d'Emilie Kinnoo.",
    images: ["/images/home-bg.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}