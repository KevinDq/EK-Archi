"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/maison-indivuelle-1.jpg",
    "/images/maison-plain-pied-1.jpg",
    "/images/chevrerie-1.jpg",    
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen text-gray-800 fade-in">
      <section className="h-screen w-full relative flex items-end justify-center text-white transition-all duration-1000">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image de fond ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <article className="w-full px-6 pt-6 pb-12 text-center flex flex-col items-center z-10 bg-gray-700/50 transition duration-500 lg:flex-row lg:items-center lg:justify-center lg:px-10 xl:px-24">
          <div className="w-full max-w-7xl">
            <h1
              className="text-3xl font-light tracking-wide mb-4 lg:text-4xl 2xl:text-7xl"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)" }}
            >
              Conception architecturale moderne
            </h1>
            <hr className="w-full" />
            <p
              className="text-lg mb-6"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)" }}
            >
              Créons ensemble des espaces élégants, durables et uniques.
            </p>
          </div>
          <article className="border w-80 h-20 flex items-center justify-center hover:bg-gray-600/50 transition duration-500">
            <Link
              href="/portfolio"
              aria-label="Voir les réalisations d'Emilie Kinnoo'"
              className="inline-block text-xl px-6 py-3 hover:scale-110 transition duration-500"
            >
              Voir mes réalisations
            </Link>
          </article>
        </article>
      </section>
    </main>
  );
}
