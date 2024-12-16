import { motion } from "framer-motion";
import FeaturesWithIcons from "./FeaturesWithIcons";

const Features = () => {
    return (
        <motion.div
            className="bg-black text-white min-h-screen flex flex-col items-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Activa al estar 50% visible
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
        >
            {/* Sección principal */}
            <div className="w-screen flex items-center justify-center relative">
                <div className="flex flex-col items-center text-center space-y-4">
                    <motion.h1
                        className="font-bold text-sky-blue-transparent text-2xl text-center"
                        variants={{
                            hidden: { y: -50, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        CRYPTO FEATURE
                    </motion.h1>
                    <motion.h1
                        className="text-5xl font-bold px-4"
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Best Features
                    </motion.h1>
                    <motion.p
                        className="text-lg px-4"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    >
                        Experience unmatched efficiency and innovation today.
                    </motion.p>
                </div>
            </div>

            {/* Sección con iconos */}
            <motion.div
                className="w-full"
                variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <FeaturesWithIcons />
            </motion.div>
        </motion.div>
    );
};

export default Features;
