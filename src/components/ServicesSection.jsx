import React from "react";
// Importation des icônes
import { FaLightbulb, FaCode, FaChalkboardTeacher } from "react-icons/fa";
// Importation de framer-motion pour les animations
import { motion } from "framer-motion";

// Importez vos images de manière classique pour React
import consultingImage from "../img/consultation.jfif";
import developmentImage from "../img/coder.jpeg";
import trainingImage from "../img/formation.jpg";

// Définition des variantes d'animation pour une apparition échelonnée
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Chaque enfant s'anime avec un délai de 0.2s après le précédent
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const ServicesSection = () => {
  const servicesData = [
    {
      id: "consulting",
      icon: <FaLightbulb className="text-yellow-500 text-6xl mx-auto mb-4" />,
      title: "Conseil Stratégique & Consulting",
      description: "Nous guidons votre entreprise à travers la transformation numérique, en optimisant vos processus et en identifiant des opportunités de croissance.",
      image: consultingImage,
      alt: "Personnes discutant autour d'une idée lumineuse"
    },
    {
      id: "development",
      icon: <FaCode className="text-blue-500 text-6xl mx-auto mb-4" />,
      title: "Développement Web & Mobile",
      description: "Conception et création d'applications web et mobiles performantes, intuitives et sur mesure pour répondre précisément à vos besoins métiers.",
      image: developmentImage,
      alt: "Écran de code avec des symboles de développement"
    },
    {
      id: "training",
      icon: <FaChalkboardTeacher className="text-green-500 text-6xl mx-auto mb-4" />,
      title: "Formations & Ateliers Technologiques",
      description: "Développez les compétences de vos équipes avec nos formations pratiques sur les dernières technologies web et les bonnes pratiques de développement.",
      image: trainingImage,
      alt: "Personnes participant à un atelier de formation"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre de la section avec plus d'emphase */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Anime une seule fois quand 50% visible
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Nos <span className="text-yellow-500">Services Clés</span>
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Nous transformons vos visions en solutions numériques concrètes.
        </motion.p>

        {/* Grille des services avec animations échelonnées */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" // Écart augmenté
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} // Déclenche quand 30% du conteneur est visible
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative bg-white rounded-xl shadow-xl overflow-hidden
                         transform transition-all duration-500 ease-in-out
                         hover:scale-[1.03] hover:shadow-2xl hover:brightness-110
                         cursor-pointer group" // Ajout de "group" pour les effets de survol imbriqués
              variants={itemVariants} // Applique les variantes d'animation
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }} // Ajoute un léger effet de "tap" pour le mobile
            >
              {/* Image de fond utilisant une balise <img> standard */}
              <div className="absolute inset-0">
                <img
                  src={service.image.src || service.image} // Adaptez l'accès au chemin de l'image si nécessaire
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // L'image s'agrandit au survol
                />
              </div>

              {/* Overlay dynamique - commence plus sombre, s'éclaircit au survol */}
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-50 transition-opacity duration-300"></div>

              {/* Contenu */}
              <div className="relative z-10 text-center p-8 flex flex-col justify-between h-full"> {/* Rembourrage augmenté, flex pour la mise en page */}
                <div className="flex-grow"> {/* Permet au contenu de s'étendre */}
                  {service.icon}
                  <h3 className="text-3xl font-bold text-white mb-3 mt-4">{service.title}</h3> {/* Taille de police augmentée */}
                  <p className="text-gray-200 text-lg leading-relaxed"> {/* Lisibilité améliorée */}
                    {service.description}
                  </p>
                </div>
                {/* Optionnel : Ajout d'un bouton "En savoir plus" */}
                <motion.button
                  className="mt-6 bg-yellow-500 text-blue-900 font-semibold py-3 px-8 rounded-full
                             opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0
                             transition-all duration-300 ease-out shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  En savoir plus
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;