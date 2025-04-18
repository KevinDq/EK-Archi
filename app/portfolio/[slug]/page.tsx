import { projets } from "@/app/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function RealisationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = projets.find((p) => p.slug === slug);

  if (!projet) return notFound();

  return (
    <main className="min-h-screen w-full bg-stone-300 px-4 pt-28 py-20 flex sm:items-center justify-center">
      <section className="backdrop-blur-md mt-20 sm:mt-6 bg-white/50 border border-white/20 shadow-lg sm:max-w-8/10 w-full xl:max-w-2/3 p-8 text-gray-800">
        <header>
          <h1 className="text-2xl sm:text-4xl font-semibold mb-6 text-center font-serif">{projet.title}</h1>
        </header>
        <article className="flex flex-col xl:flex-row gap-1 sm:gap-6">
          <div className="basis-1/2 w-full flex items-center">
            <Image
              src={projet.image}
              alt={projet.title}
              width={900}
              height={600}
              className="mb-6 object-cover w-full h-auto"
            />
          </div>
          <div className="basis-1/2 flex flex-col justify-between">
            <p className="text-sm text-justify sm:text-base leading-relaxed text-gray-700">
              {projet.descriptionParts?.map((part, index) =>
                typeof part === "string" ? (
                  <span key={index}>{part}</span>
                ) : (
                  <a
                    key={index}
                    href={part.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 font-bold hover:text-zinc-900"
                  >
                    {part.text}
                  </a>
                )
              )}
            </p>
            <div className="flex flex-col items-center justify-center md:flex-row gap-2 mt-4">
              <Image
                src={projet.image_two!}
                alt={projet.title}
                width={300}
                height={100}
                className="mb-6 object-cover w-full md:w-1/2 h-auto"
              />
              <Image
                src={projet.image_third!}
                alt={projet.title}
                width={300}
                height={100}
                className="mb-6 object-cover w-full md:w-1/2 h-auto"
              />
            </div>
          </div>
        </article>
        <article className="mt-4 text-center">
          <Link
            href="/portfolio"
            aria-label="Retour à la page des réalisations"
            className="inline-block bg-gray-200 text-black px-6 py-2 hover:opacity-100 transition duration-500 border text-gray-600 opacity-75"
          >
            Retour aux réalisations
          </Link>
        </article>
      </section>
    </main>
  );
}
