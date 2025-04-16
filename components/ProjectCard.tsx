"use client";

import { useState } from "react";
import Modal from "./Modal";

type CardProps = {
  title: string;
  content: string;
  image: string;
  slug: string;
};

export default function RealisationCard({ title, content, image, slug }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-white  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 animate-fade-in-up"
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-25 transition-opacity duration-300 hover:opacity-50"></div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{content}</p>
        </div>
      </article>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        content={content}
        image={image}
        slug={slug}
      />
    </>
  );
}
