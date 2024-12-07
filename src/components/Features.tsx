import { motion } from "framer-motion";
import FeaturesWithIcons from "./FeaturesWithIcons";

const Features = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center mt-10">
            {/* Sección principal */}
            <div className="w-screen flex items-center justify-center relative">
                <div className="flex flex-col items-center text-center space-y-4">
                    <h1 className="font-bold text-sky-blue-transparent text-2xl text-center">
                        CRYPTO FEATURE
                    </h1>
                    <motion.h1
                        className="text-5xl font-bold px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Best Features
                    </motion.h1>
                    <motion.p
                        className="text-lg px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                    >
                        Experience unmatched efficiency and innovation today.
                    </motion.p>
                </div>
            </div>

            {/* Sección con iconos */}
            <div className="w-full">
                <FeaturesWithIcons />
            </div>
        </div>
    );
};

export default Features;
