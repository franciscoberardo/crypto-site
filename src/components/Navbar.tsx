import React from 'react';

const Navbar = () => (
  <nav className="flex items-center justify-between px-20 py-5 shadow-md text-2xl">
    <div className="font-sans font-bold text-white">C L I P T O</div>
    <ul className="flex space-x-6 text-gray-600">
      <li className="hover:text-blue-500 cursor-pointer">Home</li>
      <li className="hover:text-blue-500 cursor-pointer">Products</li>
      <li className="hover:text-blue-500 cursor-pointer">About</li>
      <li className="hover:text-blue-500 cursor-pointer">Contact</li>
    </ul>
    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Login</button>
  </nav>
);

export default Navbar;
