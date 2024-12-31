import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is cryptocurrency?",
      answer:
        "Cryptocurrency is a form of digital or virtual currency that leverages blockchain technology for secure and decentralized transactions.",
    },
    {
      question: "Why should I invest in cryptocurrency?",
      answer:
        "Cryptocurrencies offer high growth potential due to their volatility and adoption in various industries. They provide opportunities to diversify your investment portfolio.",
    },
    {
      question: "How safe is investing in cryptocurrency?",
      answer:
        "While the blockchain technology behind cryptocurrencies is secure, investing involves risks. It&apos;s crucial to conduct thorough research and seek advice from experts.",
    },
    {
      question: "How can I start investing in cryptocurrencies?",
      answer:
        "Begin by creating an account on a reputable crypto exchange, completing the verification process, and transferring funds. You can then choose which cryptocurrencies to invest in based on your research.",
    },
    {
      question: "What makes your consultancy unique?",
      answer:
        "Our team combines expertise in blockchain technology, financial analysis, and market trends. We tailor strategies to help you navigate the complex world of crypto investing.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="w-4/5 max-w-7xl flex flex-col lg:flex-row gap-8">
        {/* Left Column: Questions */}
        <motion.div className="flex-1" variants={containerVariants}>
          {questions.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-4 p-[2px] bg-gradient-to-r from-green-400 to-blue-500"
              variants={itemVariants}
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-black"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <motion.div
                  className="text-gray-500"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M256 112v288m144-144H112"
                    ></path>
                  </svg>
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="overflow-hidden bg-black p-4 text-gray-300"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column: Additional Text */}
        <motion.div
          className="flex-1 flex flex-col items-start p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-4xl md:text-6xl font-semibold mb-4">FAQ&apos;s</p>
          <p className="text-lg text-gray-300 mb-4">
            We specialize in empowering individuals and businesses to make
            informed decisions in the dynamic world of cryptocurrencies. From
            beginners to seasoned investors, our expertise can guide you every
            step of the way.
          </p>
          <p className="text-lg text-gray-300">
            If your question isn&apos;t answered here, feel free to reach out to us
            through our contact page. We&apos;re here to help you succeed.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
