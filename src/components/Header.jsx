import React, { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi"; // Icônes pour le menu mobile

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu mobile

  // Fonction pour détecter la section visible
  const handleScroll = () => {
    const sections = [
      { id: "home", offset: document.getElementById("home")?.offsetTop || 0 },
      { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
      { id: "services", offset: document.getElementById("services")?.offsetTop || 0 },
      { id: "contact", offset: document.getElementById("contact")?.offsetTop || 0 },
    ];

    const scrollPosition = window.scrollY + window.innerHeight / 3;

    const currentSection = sections
      .filter((section) => section.offset <= scrollPosition)
      .pop();

    if (currentSection && currentSection.id !== activeLink) {
      setActiveLink(currentSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Fermer le menu mobile après clic
  };

  return (
    <header className="bg-blue-900 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo de la société */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold">Velonis</h1>
        </div>

        {/* Bouton pour menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Desktop */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-900 md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center md:items-baseline">
            {[{ id: "home", label: "Accueil", icon: <FaHome /> },
              { id: "about", label: "À propos", icon: <FaInfoCircle /> },
              { id: "services", label: "Services", icon: <FaServicestack /> },
              { id: "contact", label: "Contact", icon: <FaPhoneAlt /> },
            ].map((link) => (
              <li key={link.id} className="md:mb-0 mb-3">
                <a
                  href={`#${link.id}`}
                  className={`flex items-center pb-1 hover:text-yellow-500 transition duration-300 ease-in-out ${
                    activeLink === link.id ? "border-b-4 border-yellow-500" : ""
                  }`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icônes sociales */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=61568760222847&sk=about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook className="text-white hover:text-blue-600 text-2xl" />
          </a>
          <a href="https://x.com/YaoElom13" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle className="text-white hover:text-blue-400 text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
