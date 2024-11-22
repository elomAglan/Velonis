import React from "react";
import { FaRegLightbulb, FaHandshake, FaUsers } from "react-icons/fa"; // Icônes pour la mission, valeurs, et équipe
import { motion } from "framer-motion"; // Importation de framer-motion pour des animations

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white min-h-screen flex flex-col items-center">
      <div className="container mx-auto text-center px-6 md:px-12">
        {/* Titre de la section */}
        <motion.h2
          className="text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          À propos de Velonis
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Velonis est une entreprise innovante qui fournit des solutions efficaces et sur mesure
          pour répondre aux défis modernes des entreprises. Nous nous engageons à transformer vos
          besoins en solutions concrètes et évolutives.
        </motion.p>
      </div>

      {/* Section Mission et Valeurs sur la même ligne */}
      <div className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        
        {/* Section Mission */}
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-md mx-auto bg-blue-50 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}  // Hover discret
        >
          <motion.h3
            className="text-xl font-semibold text-blue-700 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mission
          </motion.h3>
          <FaRegLightbulb className="text-yellow-500 text-4xl mx-auto" />
          <p className="mt-4 text-gray-600">
            Nous croyons en l'innovation comme moteur de croissance. Chaque solution que nous
            proposons est conçue pour apporter de la valeur ajoutée à nos clients.
          </p>
        </motion.div>

        {/* Section Valeurs */}
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-md mx-auto bg-green-50 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}  // Hover discret
        >
          <motion.h3
            className="text-xl font-semibold text-blue-700 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Confiance
          </motion.h3>
          <FaHandshake className="text-green-500 text-4xl mx-auto" />
          <p className="mt-4 text-gray-600">
            La confiance et la collaboration sont au cœur de notre approche. Nous travaillons
            en étroite collaboration avec nos clients pour comprendre leurs besoins et trouver
            des solutions personnalisées.
          </p>
        </motion.div>

        {/* Section Unité */}
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-md mx-auto bg-blue-50 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}  // Hover discret
        >
          <motion.h3
            className="text-xl font-semibold text-blue-700 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unité
          </motion.h3>
          <FaUsers className="text-blue-500 text-4xl mx-auto" />
          <p className="mt-4 text-gray-600">
            Notre équipe est composée d'experts passionnés, toujours prêts à relever les défis
            et à apporter des solutions innovantes aux entreprises.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
