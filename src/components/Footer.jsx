import React from "react";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillHome, AiFillInfoCircle, AiFillAppstore, AiFillPhone } from "react-icons/ai"; // Ajout des importations

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* Colonne 1 : Logo et Description */}
        <div>
          <h1 className="text-3xl font-bold">Velonis</h1>
          <p className="mt-4 text-gray-300">
            Simplifiez votre quotidien avec nos solutions technologiques innovantes et performantes. Nous sommes là pour vous accompagner dans votre transformation digitale.
          </p>
        </div>

        {/* Colonne 2 : Liens rapides avec icônes */}
        <div className="flex justify-center items-center space-x-8 mt-6 sm:mt-0">
          <a
            href="#home"
            className="hover:text-yellow-400 transition duration-300"
            title="Accueil"
          >
            <AiFillHome className="text-2xl" />
          </a>
          <a
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
            title="À propos"
          >
            <AiFillInfoCircle className="text-2xl" />
          </a>
          <a
            href="#services"
            className="hover:text-yellow-400 transition duration-300"
            title="Services"
          >
            <AiFillAppstore className="text-2xl" />
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
            title="Contact"
          >
            <AiFillPhone className="text-2xl" />
          </a>
        </div>

        {/* Colonne 3 : Contact et Réseaux Sociaux */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">Nous contacter</h2>
          <p className="text-gray-300">Adresse : Tokoin Wuiti, Lomé, Togo</p>
          <p className="text-gray-300">Téléphone : <a href="tel:+22898801667" className="hover:text-yellow-400">+228 98801667</a></p>
          <p className="text-gray-300">Email : <a href="mailto:velonisvelonix@gmail.com" className="hover:text-yellow-400">velonisvelonix@gmail.com</a></p>
          <div className="mt-4 flex justify-center sm:justify-start space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61568760222847&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition duration-300"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://x.com/YaoElom13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition duration-300"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.instagram.com/velon.ix/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-400 transition duration-300"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/veloniscompany-linkedin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 transition duration-300"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; 2024 <span className="font-bold text-white">Velonis</span>. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
