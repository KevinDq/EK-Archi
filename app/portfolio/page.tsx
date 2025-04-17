import RealisationCard from "@/components/ProjectCard";
import { projets } from "@/app/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ek-archi.vercel.app"),
  title: "Emilie Kinnoo | Portfolio",
  description:
    "Découvrez les projets architecturaux d'Emilie Kinnoo' : maisons contemporaines, villas design et espaces uniques.",  
  openGraph: {
    title: "Emilie Kinnoo | Portfolio",
    description:
      "Un portfolio moderne présentant les réalisations architecturales d'Emilie Kinnoo.",
    url: "https://ek-archi.vercel.app/portfolio",
    siteName: "Portfolio Emilie Kinnoo",
    images: [
      {
        url: "/images/maison-indivuelle-1.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Projet Maison individuelle",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },  
};

export default function Realisations() {
  return (
    <main className="pt-16 px-2 2xl:px-48 h-screen bg-stone-100">
      {/* Section Titre */}
      <header className="text-center mb-12 relative z-10 mt-14 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-gray-600 mb-4 relative font-leah" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)' }}>          
          Ce que j'ai réalisé
        </h1>
        <p className="text-lg text-gray-600 opacity-75" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)' }}>Découvrez mes projets les plus récents et inspirants.</p>
      </header>

      {/* Grille des projets */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {projets.map((projet) => (
          <article  key={projet.slug}>
            <RealisationCard {...projet} />
          </article>          
        ))}
      </section>
    </main>
  );
}

