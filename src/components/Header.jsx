import React, { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaLaptopCode, FaEnvelope } from "react-icons/fa"; // Changed FaServicestack to FaLaptopCode, FaPhoneAlt to FaEnvelope
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6"; // Using Fa6 for newer icons, particularly Twitter/X
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // Changed name for clarity: indicates if page has scrolled

  // Smooth scroll logic
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Adjust scroll position to account for fixed header height
      const headerOffset = 80; // Approximate header height
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle scroll to adjust header style and active link
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Change header style on scroll
    if (currentScrollY > 50) { // Changed threshold to 50px for less immediate change
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Update activeLink based on scroll position
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      // Using getBoundingClientRect for more accurate position relative to viewport
      const rect = section.getBoundingClientRect();
      const offset = 100; // Offset to activate link a bit before section top

      if (rect.top <= offset && rect.bottom >= offset) {
        setActiveLink(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check in case page loads already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    scrollToSection(linkId); // Use the custom scroll function
    setMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white text-blue-900 shadow-lg" : "bg-transparent text-white" // Inverted colors for scrolled state for better contrast
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-5">
        {/* Company Logo */}
        <div className="flex items-center">
          <a href="#home" className={`text-3xl font-extrabold ${isScrolled ? "text-blue-900" : "text-white"}`}>
            Velonis<span className="text-yellow-500">.</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-3xl focus:outline-none ${isScrolled ? "text-blue-900" : "text-white"}`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop and Mobile Navigation */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            ${isScrolled ? "bg-white" : "bg-blue-900"} md:bg-transparent
            transition-all duration-300 ease-in-out
            ${menuOpen ? "block" : "hidden md:flex"}
            md:items-center md:space-x-8
            py-4 md:py-0 px-4 md:px-0
            shadow-lg md:shadow-none
          `}
        >
          <ul className="flex flex-col md:flex-row items-center">
            {[
              { id: "home", label: "Accueil", icon: <FaHome /> },
              { id: "about", label: "À propos", icon: <FaInfoCircle /> },
              { id: "services", label: "Services", icon: <FaLaptopCode /> }, // Changed icon
              { id: "contact", label: "Contact", icon: <FaEnvelope /> }, // Changed icon
            ].map((link) => (
              <li key={link.id} className="mb-4 md:mb-0 md:mr-6 last:mr-0">
                <a
                  href={`#${link.id}`}
                  className={`
                    flex items-center text-lg font-medium px-2 py-1 rounded
                    hover:text-yellow-500 hover:bg-gray-100/20 md:hover:bg-transparent
                    transition duration-300 ease-in-out
                    ${isScrolled ? "text-blue-900" : "text-white"}
                    ${activeLink === link.id
                      ? "text-yellow-500 md:border-b-2 md:border-yellow-500" // Highlight active link
                      : ""
                    }
                  `}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={activeLink === link.id ? "page" : undefined}
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons - now also adapt to scrolled state */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61568760222847&sk=about"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir notre page Facebook"
            className={`${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-600 transition duration-300 text-2xl`}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/YaoElom13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir notre profil X (anciennement Twitter)"
            className={`${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-400 transition duration-300 text-2xl`}
          >
            <FaXTwitter /> {/* Updated Twitter icon */}
          </a>
          <a
            href="https://www.linkedin.com/in/elomaglan/" // Assuming you want to link to a LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir notre profil LinkedIn"
            className={`${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-700 transition duration-300 text-2xl`}
          >
            <FaLinkedinIn /> {/* Added LinkedIn icon for a professional touch */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;