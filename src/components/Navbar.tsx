import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Íconos de menú y cerrar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`absolute top-0 left-0 w-full z-20 px-6 text-white transition duration-300 bg-transparent py-4`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-sans font-bold text-white text-2xl">C R I P T O</div>

        {/* Botón de menú (visible solo en pantallas pequeñas) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú (oculto en pantallas pequeñas) */}
        <ul
          className={`md:flex space-x-8 text-white text-xl hidden transition-transform duration-300 ${
            isOpen ? "absolute top-14 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-4" : ""
          }`}
        >
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Features</li>
          <li className="hover:text-blue-500 cursor-pointer">Coins</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Support</li>
        </ul>

        {/* Botón Get In Touch (oculto en pantallas pequeñas) */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 bg-transparent text-white hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 rounded-full border-2 border-white">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
