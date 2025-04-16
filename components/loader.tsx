import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div
      className="fixed w-screen flex flex-col items-center justify-center h-screen bg-cover bg-center animate-fade-out z-50"
      style={{
        backgroundImage:
          "url('/images/loader-bg.jpg')",
      }}
    >
      <Image
        src="/images/logo_white.png"
        alt="Logo"
        width={200}
        height={200}
        className="mb-6 animate-bounce drop-shadow-lg"
      />
      <h1 className="text-5xl font-bold text-white animate-fadein-up text-shadow-lg">
        Bienvenue
      </h1>
    </div>
  );
};

export default Loader;