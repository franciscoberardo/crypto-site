import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Logo from "@/assets/cripto.jpg";

const Navbar = () => {

  return (
    <header
      className={`fixed w-full z-20 grid grid-cols-3 items-center px-6 text-white transition duration-300 bg-transparent py-4
      `}
    ><div className="font-sans font-bold text-white text-2xl">C R I P T O</div>
      <ul className="flex space-x-8 text-white text-xl">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Features</li>
        <li className="hover:text-blue-500 cursor-pointer">Coins</li>
        <li className="hover:text-blue-500 cursor-pointer">Services</li>
        <li className="hover:text-blue-500 cursor-pointer">Support</li>
      </ul>

      <div className="flex items-center justify-end hidden md:flex">
        <button className="px-4 py-2 bg-transparent text-white hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 rounded-full border-2 border-white">
        Get In Touch
        </button>
      </div>



    </header>
  );
};

export default Navbar;