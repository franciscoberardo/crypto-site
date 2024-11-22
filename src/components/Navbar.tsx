import React from 'react';
import Button from "@/components/Button";

const Navbar = () => (
  <nav className="flex items-center justify-between px-20 py-5 shadow-md text-md">
    <div className="font-sans font-bold text-white">C L I P T O</div>
    <ul className="flex space-x-6 text-gray-600 text-2xl">
      <li className="hover:text-blue-500 cursor-pointer">Home</li>
      <li className="hover:text-blue-500 cursor-pointer">Products</li>
      <li className="hover:text-blue-500 cursor-pointer">About</li>
      <li className="hover:text-blue-500 cursor-pointer">Contact</li>
    </ul>
    <Button title="Login" />
  </nav>
);

export default Navbar;
