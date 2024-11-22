import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

const Header = () => (
    <motion.div style={{
      background: `
        radial-gradient(circle at -25% -50%, #00f0ff 20%, #fff0 37%),
        radial-gradient(circle at 125% 150%, #00f0ff 20%, #fff0 37%)`,
      backgroundColor: 'black',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
            <Navbar />

  <motion.header
    className="relative flex flex-col py-10 items-center text-center text-white">
    <h1 className="text-7xl 2xl:text-9xl font-bold mb-4 w-5/6">
      Increase your capital with{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
        cryptocurrency
      </span>
    </h1>
    <p className="mb-6 text-3xl text-gray-300 w-2/4">
      Kava is a decentralized blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.
    </p>

    {/* Botón con transiciones usando Framer Motion */}
    <Button title="Get Started" />

    <div className="mt-8 w-2/4">
      <video
        className="h-auto rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vide3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </motion.header>
  </motion.div>
);

export default Header;
