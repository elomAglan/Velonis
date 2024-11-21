import React from "react";
import { FaLightbulb, FaCode, FaChalkboardTeacher } from "react-icons/fa"; // Icônes
import { motion } from "framer-motion"; // Animation
import consultingImage from "../img/consultation.jfif";
import developmentImage from "../img/coder.jpeg";
import trainingImage from "../img/formation.jpg";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre de la section */}
        <motion.h2
          className="text-4xl font-bold text-center text-blue-800 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Services
        </motion.h2>

        {/* Grille des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service : Consulting */}
          <motion.div
            className="relative bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundImage: `url(${consultingImage})` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1, // Effet d'agrandissement au survol
              transition: { duration: 0.3 }
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Contenu */}
            <div className="relative z-10 text-center p-6 text-white">
              <FaLightbulb className="text-yellow-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">Consulting</h3>
              <p className="mt-3">
                Optimisation de vos processus et transformation numérique.
              </p>
            </div>
          </motion.div>

          {/* Service : Développement */}
          <motion.div
            className="relative bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundImage: `url(${developmentImage})` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              scale: 1.1, // Effet d'agrandissement au survol
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center p-6 text-white">
              <FaCode className="text-blue-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">Développement</h3>
              <p className="mt-3">
                Création d'applications sur mesure pour vos besoins.
              </p>
            </div>
          </motion.div>

          {/* Service : Formation */}
          <motion.div
            className="relative bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundImage: `url(${trainingImage})` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              scale: 1.1, // Effet d'agrandissement au survol
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center p-6 text-white">
              <FaChalkboardTeacher className="text-green-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">Formation</h3>
              <p className="mt-3">
                Ateliers pour maîtriser les technologies modernes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
