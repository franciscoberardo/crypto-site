import { motion } from 'framer-motion';

// Definimos los tipos de las props
interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => (
  <motion.button
    className="relative px-6 py-3 text-white font-semibold rounded-lg shadow-lg overflow-hidden"
    initial={{ background: 'linear-gradient(to right, #ff007f, #00f0ff)' }}
    whileHover={{
      background: 'linear-gradient(to right, #000000, #000000)',
      border: '1px solid white',
    }}
    transition={{ duration: 0.3 }}
  >
    {/* Capa que cambia de izquierda a derecha */}
    <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full motion-safe:group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
    <span className="relative">{title}</span>
  </motion.button>
);

export default Button;
