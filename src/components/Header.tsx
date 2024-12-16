import { useEffect, useRef } from "react";
import Image from "next/image";
import Foto from "@/assets/cripto.jpg";
import Navbar from "./Navbar";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import CriptoIcons from "./CriptoIcons";
import Join from "./Join";

const Header = () => {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-white font-sans"
      >
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={Foto}
              alt="Imagen de fondo"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="relative container mx-auto flex items-center justify-center h-full px-4">
            <motion.header
              className="relative flex flex-col py-10 items-center text-center text-white"
            >
              <motion.h1
                className="text-7xl 2xl:text-9xl font-bold mb-4 w-5/6 font-sans2"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Increase your capital with{" "}
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
              </motion.h1>
              <motion.p
                className="mb-6 text-xl text-gray-300 w-2/4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Contact us for expert advice and tailored strategies to navigate
                the world of cryptocurrency investments.
              </motion.p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <CriptoIcons />
              </motion.div>
              <motion.button
                className="px-4 py-2 bg-blue-800 text-white rounded-full border-2 border-white"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 100 }}
                whileHover={{
                  rotate: [0, 2, -2, 0],
                  transition: { duration: 0.4 },
                }}
              >
                Buy Tokens 20% OFF
              </motion.button>


            </motion.header>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiChevronDown size={36} className="text-white" />
          </motion.div>
        </div>
        <Join />
      </motion.section>
    </div>
  );
};

export default Header;
