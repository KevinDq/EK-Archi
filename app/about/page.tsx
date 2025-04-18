import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="text-gray-800 h-screen w-screen bg-stone-100 py-16 px-4 flex flex-col gap-6 bg-repeat lg:flex-row xl:items-center">      
      <section className="max-w-4xl mx-auto animate-fade-in-up mt-20 sm:mt-4 lg:order-2">
        <h1 className="text-5xl font-semibold text-center mb-9 mt-5 font-leah text-gray-900">
          Qui je suis
        </h1>
        <article className="flex flex-col xl:flex-row items-center gap-12 sm:mb-12">
          <div className="w-40 sm:w-60 sm:h-96 flex justify-center rounded-full shadow-xl  border-4 border overflow-hidden ">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait de l'architecte"
              width={200}
              height={200}
              className="object-cover w-full hover:scale-105 transition duration-300"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-5 text-sm sm:text-md sm:text-lg flex flex-col items-center text-justify">
            <p>
              <strong>Emilie Kinnoo</strong>, architecte passionnée, je vous accompagne
              depuis plus de 10 ans dans la réalisation de projets sur-mesure.
              À l’écoute de vos envies, je conçois des espaces durables, esthétiques
              et parfaitement intégrés à leur environnement.
            </p>
            <p>
              Diplômée de l'Institut Saint-Luc à Tournai en Belgique, j'ai collaboré sur
              divers projets : maison individuelle, rénovation agricole, et plus encore.
            </p>            
            <Link
              href="/contact"
              className="bg-gray-800 text-white text-lg font-medium py-3 px-8 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2"
            >
              Me contacter
            </Link>            
          </div>
        </article>
        <article className="hidden sm:block shadow-md p-3 sm:px-8 sm:py-10 mb-10 bg-gray-600 forced-border">          
          <p className="text-gray-200 text-sm sm:text-lg leading-relaxed font-serif">
            Chaque projet est une rencontre, une histoire à façonner.
            L’architecture est ici envisagée comme un dialogue entre l’usage, la
            lumière, les matériaux et le paysage. Je place la relation client
            au cœur du processus créatif, pour une architecture sincère, sensible
            et durable.
          </p>
        </article>
        
      </section> 
      <section className="flex justify-center animate-fade-in-up sm:mt-8 xl:w-1/3">
          <article className="flex flex-col space-y-4 text-center">
            <div className="bg-stone-300 p-4 shadow-lg hover:shadow-2xl transition duration-300 hover:translate-x-4">
              <div className="text-4xl mb-2">🏡</div>
              <h3 className="text-lg font-semibold mb-1">Conception sur-mesure</h3>
              <p className="text-gray-600 text-sm">Création d’espaces personnalisés, adaptés aux besoins et aux envies des clients.</p>
            </div>
            <div className="bg-stone-300 p-4 shadow-lg hover:shadow-2xl transition duration-300 hover:translate-x-4">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="text-lg font-semibold mb-1">Suivi de chantier</h3>
              <p className="text-gray-600 text-sm">Coordination rigoureuse des intervenants pour un chantier sans accroc.</p>
            </div>
            <div className="bg-stone-300 p-4 shadow-lg hover:shadow-2xl transition duration-300 hover:translate-x-4">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="text-lg font-semibold mb-1">Éco-conception</h3>
              <p className="text-gray-600 text-sm">Utilisation de matériaux durables et approche respectueuse de l’environnement.</p>
            </div>
          </article>
      </section>     
      <section className="flex justify-center animate-fade-in-up sm:mt-6 lg:order-3 xl:w-1/3">
        <article className="flex flex-col space-y-4 text-center">          
          <div className="bg-stone-300 p-4 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-x-4">
            <div className="text-4xl mb-2">🏗️</div>
            <h3 className="text-lg font-semibold mb-1">Rénovation</h3>
            <p className="text-gray-600 text-sm">Valorisation de l’existant avec des solutions modernes et fonctionnelles.</p>
          </div>
          <div className="bg-stone-300 p-4 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-x-4">
            <div className="text-4xl mb-2">🛋️</div>
            <h3 className="text-lg font-semibold mb-1">Design intérieur</h3>
            <p className="text-gray-600 text-sm">Création d’ambiances harmonieuses mêlant esthétique et ergonomie.</p>
          </div>
          <div className="bg-stone-300 p-4 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-x-4">
            <div className="text-4xl mb-2">📄</div>
            <h3 className="text-lg font-semibold mb-1">Démarches administratives</h3>
            <p className="text-gray-600 text-sm">Accompagnement complet dans la constitution des dossiers réglementaires.</p>
          </div>
        </article>
      </section>
    </main>
  );
}
