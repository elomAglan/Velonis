import React from "react";
// Assurez-vous que FaMapMarkerAlt est inclus ici :
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHome, FaInfoCircle, FaLaptopCode, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtenez l'année actuelle dynamiquement

  return (
    <footer className="bg-blue-950 text-white py-12 md:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8 px-6 md:px-12">

        {/* Colonne 1 : Logo et Description de l'entreprise */}
        <div className="md:col-span-2 lg:col-span-1">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4 tracking-tight">Velonis.</h1>
          <p className="text-gray-300 leading-relaxed text-sm">
            Votre partenaire pour des solutions numériques innovantes. Nous transformons vos idées en réalité, en optimisant vos processus et en assurant votre succès digital.
          </p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6 text-yellow-400">Liens Rapides</h2>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="flex items-center justify-center md:justify-start hover:text-yellow-300 transition duration-300 text-gray-300">
                <FaHome className="mr-3 text-lg" /> Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center justify-center md:justify-start hover:text-yellow-300 transition duration-300 text-gray-300">
                <FaInfoCircle className="mr-3 text-lg" /> À Propos
              </a>
            </li>
            <li>
              <a href="#services" className="flex items-center justify-center md:justify-start hover:text-yellow-300 transition duration-300 text-gray-300">
                <FaLaptopCode className="mr-3 text-lg" /> Services
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center justify-center md:justify-start hover:text-yellow-300 transition duration-300 text-gray-300">
                <FaEnvelope className="mr-3 text-lg" /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Informations de Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6 text-yellow-400">Contactez-nous</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="mr-3 text-lg" />
              <a href="tel:+22898801667" className="hover:text-yellow-300 transition-colors">+228 98 80 16 67</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-3 text-lg" />
              <a href="mailto:contact@velonis.com" className="hover:text-yellow-300 transition-colors">contact@velonis.com</a>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-3 text-lg mt-1" /> {/* C'est ici que FaMapMarkerAlt est utilisé */}
              <span>Tokoin Wuiti, <br />Lomé, Togo</span>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Réseaux Sociaux et Newsletter (optionnel) */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6 text-yellow-400">Suivez-nous</h2>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a href="https://www.facebook.com/profile.php?id=61568760222847&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-blue-400 bg-gray-700 hover:bg-white p-3 rounded-full transition-all duration-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://x.com/YaoElom13" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-blue-300 bg-gray-700 hover:bg-white p-3 rounded-full transition-all duration-300 text-xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/velon.ix/#" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-pink-400 bg-gray-700 hover:bg-white p-3 rounded-full transition-all duration-300 text-xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/veloniscompany-linkedin/" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-blue-500 bg-gray-700 hover:bg-white p-3 rounded-full transition-all duration-300 text-xl">
              <FaLinkedinIn />
            </a>
          </div>

          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Restez informé</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Votre e-mail"
              className="px-4 py-2 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      {/* Barre de Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {currentYear} <span className="font-bold text-white">Velonis</span>. Tous droits réservés.
        <p className="mt-1">
          Fabriqué avec ❤️ à Lomé, Togo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;