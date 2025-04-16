import type { Metadata } from "next";
import HomePage from "@/components/home-page"; // on déplace ton code client ici

export const metadata: Metadata = {
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
        url: "/images/maison-indivuelle-1.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Image d'une maison individuelle",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
