import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 relative">
      <div className="inset-0 bg-black flex flex-col items-center justify-center space-y-8 my-4">
        <div
          className="w-5/6 h-0.5 bg-white items-center"
        ></div></div>
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Logo y descripción */}
        <div className="flex flex-col items-center md:items-start">
          <div className="font-sans font-bold text-white text-2xl">C R I P T O</div>
          <p className="text-sm sm:text-base text-center md:text-left">
            Empowering your investments with innovative strategies and expert advice. Start your journey today!
          </p>
        </div>
        {/* Columna 2: Enlaces rápidos */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-center">
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
