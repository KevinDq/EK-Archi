"use client";

import { useEffect } from "react";
import Link from "next/link";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image: string;
  slug: string;
};

export default function Modal({ isOpen, onClose, title, content, image, slug }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-60 bg-black/75 flex items-center justify-center p-4">      
      <article className="bg-white p-6 sm:max-w-2/3 w-full h-9/10 sm:h-2/3 shadow-xl flex flex-col sm:flex-row relative flex gap-8">
        <div className="h-full basis-2/3">
          <img src={image} alt={title} className="h-full object-cover" />
        </div>
        <div className="basis-1/3 flex flex-col justify-center h-full">
          <button onClick={onClose} className="absolute top-2 right-4 text-gray-500 hover:text-black text-3xl cursor-pointer">&times;</button>
          <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>        
          <p className="text-gray-700">{content}</p>
          <Link
            href={`/portfolio/${slug}`}
            className="mt-6 inline-block bg-black text-white px-4 py-2 hover:bg-gray-800 transition text-center"
          >
            Voir le projet complet
          </Link>
        </div>        
      </article>
    </section>
  );
}
