import { motion } from "framer-motion";

const Join = () => {
  return (
    <div className="inset-0 bg-black flex flex-col items-center justify-center space-y-12 my-20">
          {/* Línea blanca arriba del texto */}
          <div className="w-4/5 h-0.5 bg-white"></div>

          {/* Animación de texto */}
          <motion.h1
            className="text-4xl font-bold text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Join the 20,000+ companies using our platform
          </motion.h1>

          {/* Texto adicional */}
          <motion.p
            className="text-lg text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          >
            Experience unmatched efficiency and innovation today.
          </motion.p>

          {/* Línea blanca abajo del texto */}
          <div className="w-4/5 h-0.5 bg-white"></div>
        </div>
  );
};

export default Join;
