import React from "react";
import img from '../img.jpg'; // Assurez-vous que l'image est correctement importée

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen text-white flex items-center justify-center text-center py-16 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`
        // Le dégradé est ajouté avant l'image pour s'assurer qu'il couvre toute la zone
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-12 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Bienvenue sur Velonis</h1>
        <p className="text-lg sm:text-xl mb-8 drop-shadow-lg">
          Nous sommes une startup spécialisée dans la création de solutions numériques
          innovantes et sur mesure, conçues pour répondre aux défis d'aujourd'hui et de demain.
        </p>
        <a
          href="#services"
          className="bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-yellow-400 transition duration-300"
        >
          Découvrez nos services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
