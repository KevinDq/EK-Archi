// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo_white.png"; 
import Clock from './Clock';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-40 bg-gray-700/75 -transition duration-500">        
      <article className="max-w-full mx-auto px-6 py-4 flex items-center justify-between flex-col text-white sm:flex-row">
        <div className="flex items-center">
            <Image src={logo} 
                   alt="Logo de l'architecte" 
                   className="w-10 sm:w-12 md:w-16 h-auto"
                   sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 64px" />
            <h3 className="text-lg md:text-2xl ml-2">Emilie Kinnoo Architecte</h3>
        </div>   
        <nav className="space-x-6 text-base uppercase text-sm tracking-wide mt-4 md:text-lg md:mt-0">
          <Link className="navlink" href="/">Accueil</Link>
          <Link className="navlink" href="/portfolio">Réalisations</Link>
          <Link className="navlink" href="/about">À propos</Link>
          <Link className="navlink" href="/contact">Contact</Link>
        </nav>
        <Clock/>
      </article>      
    </header>
  );
}