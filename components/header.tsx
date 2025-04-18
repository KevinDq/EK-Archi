// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo_white.png"; 
import Clock from './Clock';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-40 bg-gray-700/75">
      <article className="max-w-full mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-white space-y-4 sm:space-y-0">
        {/* Logo + Titre */}
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo de l'architecte"
              className="w-10 h-auto sm:w-12 md:w-16"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 64px"
            />
            <h3 className="text-base ml-2 sm:text-lg md:text-2xl">
              Emilie Kinnoo Architecte
            </h3>
          </div>
          {/* Optionnel : cacher l'horloge sur très petits écrans */}
          <div className="block sm:hidden ml-2">
            <Clock />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-3 text-sm sm:text-base uppercase tracking-wide">
          <Link className="navlink" href="/">Accueil</Link>
          <Link className="navlink" href="/portfolio">Réalisations</Link>
          <Link className="navlink" href="/about">À propos</Link>
          <Link className="navlink" href="/contact">Contact</Link>
        </nav>

        {/* Horloge desktop */}
        <div className="hidden sm:block">
          <Clock />
        </div>
      </article>
    </header>
  );
}
