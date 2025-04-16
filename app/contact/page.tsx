'use client';

import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Ajout d'un état pour le bouton d'envoi

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Le formulaire est en cours d'envoi

    try {
      const response = await fetch('https://formspree.io/f/mqapwapb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Une erreur est survenue. Essayez à nouveau.');
      }
    } catch (error) {
      setStatus('Une erreur est survenue. Essayez à nouveau.');
    } finally {
      setIsSubmitting(false); // Formulaire terminé, bouton réactif
      setTimeout(() => {
        setStatus(null);
      }, 4000);
    }
  };

  return (
    <main className="w-screen h-screen mx-auto px-4 py-12 bg-zinc-200 flex flex-col lg:flex-row items-center justify-around">
      <header className='w-lg flex flex-col items-center justify-center gap-6 my-24'>
        <h1 className="text-7xl font-bold text-center animate-fade-in-up font-leah">Contactez-moi</h1>        
        <p className="text-lg text-gray-700">
          Vous avez une idée, un espace à transformer ou un lieu à imaginer ?
          Discutons-en. Je vous accompagne dans toutes les étapes, de la conception à la réalisation.
        </p>
        <p className="text-base text-gray-600 italic">
          Réponse rapide et sans engagement.
        </p>  
        <Image
                      src="/images/design.png"
                      alt="Portrait de l'architecte"
                      width={100}
                      height={100}
                      className=""
                    />              
      </header> 
      <section className='flex flex-col w-9/10 md:w-auto items-center md:flex-row gap-12 p-12 bg-zinc-600 text-zinc-300'>
        <article className="flex flex-row justify-center items-center w-full md:w-7/10 md:flex-col gap-8 animate-slide-in basis-1/2">     
            {/* Informations de contact */}
            <div className='flex flex-col justify-between items-center'>
              <h2 className="text-2xl font-semibold mb-4">Informations</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2"><FaHome className="text-teal-300 text-2xl mr-4" />28, av. des Tilleuls 55100 Doulcon</li>
                <li className="flex items-center space-x-2"><FaPhone className="text-teal-300 text-2xl mr-4" />06 30 66 83 20</li>
                <li className="flex items-center space-x-2"><FaEnvelope className="text-teal-300 text-2xl mr-4" />emilie.kinnoo@gmail.com</li>              
              </ul>
              <div className='mt-4 flex flex-col items-center'>
                <strong>Suivez-moi :</strong>
                <div className="flex space-x-4 mt-2 text-2xl">
                  <a href="https://facebook.com/profile.php?id=100046027237718" target="_blank" rel="noopener noreferrer" className="text-teal-300 p-1 hover:bg-stone-200 hover:rounded-full">
                    <FaFacebook />
                  </a>                
                  <a href="https://www.linkedin.com/in/kinnoo-emilie-9663032aa/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Efr%2F&originalSubdomain=fr" target="_blank" rel="noopener noreferrer" className="text-teal-300 p-1 hover:bg-stone-200 hover:rounded-full">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>  
            <div className='hidden sm:block'>
              <h2 className="text-2xl font-semibold mb-4 text-center">Où me trouver</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.45183051207!2d5.167531276980353!3d49.38144446375487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47eaf85d38e99f9b%3A0x56ccfe5c181b31d6!2sAv.%20des%20Tilleuls%2C%2055110%20Doulcon!5e0!3m2!1sfr!2sfr!4v1744191190983!5m2!1sfr!2sfr"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>            
            </div>     
        </article>       
        <article className="p-6 shadow-xl w-full bg-zinc-200 text-zinc-600 basis-1/2">          
            <h2 className="text-xl font-semibold mb-4">Envoyez-moi un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Nom :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-1 border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-1 border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message :</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-1 border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-600 text-white py-3 hover:bg-zinc-800 transition-colors cursor-pointer"
                disabled={isSubmitting} // Désactive le bouton pendant l'envoi
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
            {/* Affichage du message de confirmation */}
            {status && (
              <div className="mt-4 text-center text-white text-lg py-2 px-4 bg-green-500">
                {status}
              </div>
            )}                    
        </article>     
      </section>     
       
    </main>
  );
};

export default Contact;
