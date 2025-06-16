import React, { useEffect, useRef } from "react";
// Importation de l'image de manière classique pour React
import heroBg from '../img.jpg'; // Assurez-vous que le chemin est correct

const HeroSection = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Check if Intersection Observer is supported
    if ("IntersectionObserver" in window) {
      const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.1 // 10% of the element is visible
      };

      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      if (titleRef.current) observer.observe(titleRef.current);
      if (descriptionRef.current) observer.observe(descriptionRef.current);
      if (buttonRef.current) observer.observe(buttonRef.current);
    } else {
      // Fallback for browsers that don't support Intersection Observer
      // Apply animations directly if not supported
      if (titleRef.current) titleRef.current.classList.add('animate-fadeInUp');
      // Pour les délais d'animation, vous devrez les gérer via CSS si vous ne voulez pas de JS ici
      if (descriptionRef.current) descriptionRef.current.classList.add('animate-fadeInUp', 'animate-delay-1s');
      if (buttonRef.current) buttonRef.current.classList.add('animate-fadeInUp', 'animate-delay-2s');
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white py-16 overflow-hidden bg-cover bg-center" // Ajout de bg-cover et bg-center ici
      style={{
        backgroundImage: `url(${heroBg.src || heroBg})` // Assurez-vous d'accéder au bon chemin de l'image
      }}
    >
      {/* Les overlays sont conservés car ils sont gérés par Tailwind CSS */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-50 z-10"></div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 max-w-5xl relative z-20">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg opacity-0"
        >
          Bienvenue chez <span className="text-yellow-500">Velonis.</span>
        </h1>

        <p
          ref={descriptionRef}
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg opacity-0"
        >
          Votre partenaire pour des <strong>solutions numériques innovantes</strong> et sur mesure,
          conçues pour transformer vos idées en réalité.
        </p>

        <a
          ref={buttonRef}
          href="#services"
          className="inline-block bg-yellow-500 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg
                     hover:bg-yellow-400 hover:scale-105 transition duration-300 ease-in-out
                     focus:outline-none focus:ring-4 focus:ring-yellow-300 opacity-0"
          aria-label="Découvrez nos services"
        >
          Découvrez nos services
        </a>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce print:hidden">
          <a href="#services" aria-label="Faire défiler vers le bas">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;