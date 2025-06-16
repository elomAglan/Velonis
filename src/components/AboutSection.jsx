import React from "react";
import { FaRegLightbulb, FaHandshake, FaUsers, FaEye, FaRocket, FaHeart } from "react-icons/fa"; // Ajout de plus d'icônes
import { motion } from "framer-motion";

const AboutSection = () => {
  // Variantes d'animation pour l'apparition échelonnée des éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Délai avant le début de l'animation des enfants
        staggerChildren: 0.2 // Délai entre l'animation de chaque enfant
      }
    }
  };

  // Variantes pour chaque carte (Mission, Valeurs, Équipe)
  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", // Animation plus rebondissante
        stiffness: 100, // Rigidité de l'animation
        damping: 10 // Amortissement de l'animation
      }
    }
  };

  // Variantes pour le titre principal et le paragraphe introductif
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Effet de fond subtil (similaire aux "blobs" des autres sections si vous les avez implémentés) */}
      <div className="absolute top-10 left-1/4 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-1/3 w-52 h-52 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto text-center px-6 md:px-12 relative z-10">
        {/* Titre de la section */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          À Propos de <span className="text-yellow-500">Velonis</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Velonis est votre partenaire privilégié pour des <strong>solutions</strong> numériques <strong>innovantes</strong> et sur mesure.
          Nous transformons vos défis en opportunités de croissance, avec une approche basée sur
          la <strong>collaboration</strong> la <strong>transparence</strong> et l<strong>excellence</strong>
        </motion.p>

        {/* Conteneur des éléments Mission, Vision, Valeurs (utilisant les variantes échelonnées) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Déclenche quand 30% du conteneur est visible
        >
          {/* Carte Mission */}
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg
                       border border-blue-100 transform transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:shadow-xl hover:border-blue-300"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)" }} // Petit soulèvement et ombre plus marquée
            whileTap={{ scale: 0.98 }}
          >
            <FaRocket className="text-blue-600 text-5xl mb-6 transform hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Notre Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Propulser votre réussite grâce à des solutions numériques sur mesure qui optimisent vos opérations,
              stimulent l'innovation et vous donnent un avantage concurrentiel durable.
            </p>
          </motion.div>

          {/* Carte Vision */}
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg
                       border border-yellow-100 transform transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:shadow-xl hover:border-yellow-300"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEye className="text-yellow-600 text-5xl mb-6 transform hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Notre Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Devenir le partenaire technologique de référence en Afrique de l'Ouest, reconnu pour notre
              expertise, notre intégrité et notre capacité à transformer le paysage numérique.
            </p>
          </motion.div>

          {/* Carte Valeurs */}
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg
                       border border-green-100 transform transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:shadow-xl hover:border-green-300"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.98 }}
          >
            <FaHeart className="text-red-500 text-5xl mb-6 transform hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Nos Valeurs</h3>
            <ul className="text-gray-700 list-disc list-inside text-left mx-auto max-w-xs">
              <li className="mb-2">Innovation & Créativité</li>
              <li className="mb-2">Excellence & Qualité</li>
              <li className="mb-2">Confiance & Transparence</li>
              <li>Collaboration & Engagement</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;