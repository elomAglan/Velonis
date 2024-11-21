import React from "react";

const Button = ({
  label = "Click Me", // Texte du bouton
  onClick, // Fonction appelée au clic
  type = "button", // Type de bouton (button, submit, reset)
  className = "", // Classes CSS supplémentaires
  disabled = false, // Bouton désactivé
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
