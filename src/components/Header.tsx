import { motion } from 'framer-motion';

const Header = () => (
    <header className="flex flex-col py-10 items-center text-center text-white bg-black">
        <h1 className="text-8xl font-bold mb-4 w-5/6">
            Increase your capital with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                cryptocurrency
            </span>
        </h1>
        <p className="mb-6 text-lg text-gray-600">Start trading and managing digital assets securely.</p>

        {/* Botón con transiciones usando Framer Motion */}
        <motion.button
            className="relative px-6 py-3 text-white font-semibold rounded-lg shadow-lg overflow-hidden"
            initial={{ background: 'linear-gradient(to right, #ff007f, #00f0ff)' }}
            whileHover={{ background: 'linear-gradient(to right, #000000, #000000)',border: 'white' }}
            transition={{ duration: 0.3 }}
        >
            {/* Capa que cambia de izquierda a derecha */}
            <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full motion-safe:group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative">Get Started</span>
        </motion.button>

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
    </header>
);

export default Header;
