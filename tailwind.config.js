/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    // 👇 Ajoute ça pour t'assurer que les utilitaires backdrop fonctionnent
    safelist: [
      'backdrop-blur',
      'backdrop-blur-sm',
      'backdrop-blur-md',
      'backdrop-blur-lg',
      'backdrop-blur-xl',
      'backdrop-saturate-100',
      'bg-opacity-10',
    ],
  };
  