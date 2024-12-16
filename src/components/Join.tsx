import { motion } from "framer-motion";

const Join = () => {
  return (
    <motion.div
      className="inset-0 bg-black flex flex-col items-center justify-center space-y-12 my-20"
      initial="hidden"
      whileInView="visible" // Se activa cuando entra en el campo de visión
      viewport={{ once: true, amount: 0.5 }} // Se activa una sola vez y al 50% visible
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3, // Retraso entre animaciones
            delayChildren: 0.2,
          },
        },
      }}
    >
      {/* Línea blanca arriba del texto */}
      <motion.div
        className="w-4/5 h-0.5 bg-white"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>

      {/* Animación de texto */}
      <motion.h1
        className="text-4xl font-bold text-center px-4"
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Join the 20,000+ companies using our platform
      </motion.h1>

      {/* Texto adicional */}
      <motion.p
        className="text-lg text-center px-4"
        variants={{
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Experience unmatched efficiency and innovation today.
      </motion.p>

      {/* Línea blanca abajo del texto */}
      <motion.div
        className="w-4/5 h-0.5 bg-white"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default Join;
