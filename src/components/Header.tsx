import { useEffect, useRef } from "react";
import Image from "next/image";
import Foto from "@/assets/cripto.jpg";
import Navbar from "./Navbar";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum } from "react-icons/fa"; // Para Bitcoin, Ethereum, Dogecoin y Litecoin
import { BsCoin, BsCurrencyBitcoin } from "react-icons/bs"; // Otros íconos posibles de criptomonedas
import Join from "./Join";

const Header = () => {
  return (
    <div>
      <Navbar />
      <section className="relative text-white font-sans">
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
          <Image
            src={Foto}
            alt="Imagen de fondo"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0"
          />
          {/* Degradado negro de arriba a abajo */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="relative container mx-auto flex items-center justify-center h-full px-4">
            <motion.header
              className="relative flex flex-col py-10 items-center text-center text-white"
            >
              <h1 className="text-7xl 2xl:text-9xl font-bold mb-4 w-5/6 font-sans2">
                Increase your capital with{' '}
                <motion.span
                  className="text-blue-500"
                  animate={{
                    textShadow: [
                      "0px 0px 10px rgba(0, 11, 255, 0.7)",
                      "0px 0px 20px rgba(0, 191, 255, 0.9)",
                      "0px 0px 10px rgba(0, 11, 255, 0.7)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  cryptocurrency
                </motion.span>
              </h1>

              <p className="mb-6 text-xl text-gray-300 w-2/4">
                Contact us for expert advice and tailored strategies to navigate the world of cryptocurrency investments.
              </p>

              {/* Íconos de criptomonedas */}
              <div className="flex space-x-6 mb-6">
                <div className="bg-yellow-500 rounded-full p-2">
                  <FaBitcoin size={26} className="text-white" />
                </div>
                <div className="bg-gray-900 rounded-full p-2">
                  <FaEthereum size={26} className="text-white" />
                </div>
                <div className="bg-gray-600 rounded-full p-2">
                  <BsCoin size={26} className="text-white" /> {/* Otro ícono */}
                </div>
               
                {/* Agregar más criptomonedas según disponibilidad */}
              </div>

              <button className="px-4 py-2 bg-blue-800 text-white transition-all duration-200 transform hover:scale-105 rounded-full border-2 border-white">
                Buy Tokens 20% OFF
              </button>
            </motion.header>
          </div>
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <FiChevronDown size={36} className="text-white animate-bounce" />
          </div>
        </div>
        <Join />
      </section>
    </div>
  );
};

export default Header;