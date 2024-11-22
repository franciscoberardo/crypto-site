import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Si la pregunta ya está abierta, la cierra.
  };

  const questions = [
    {
      question: "¿Qué es una criptomoneda?",
      answer: "Una criptomoneda es una moneda digital que utiliza técnicas de cifrado para asegurar las transacciones y controlar la creación de nuevas unidades."
    },
    {
      question: "¿Por qué invertir en criptomonedas?",
      answer: "Las criptomonedas ofrecen una alta volatilidad que puede generar oportunidades de inversión. Además, la tecnología blockchain es vista como el futuro de las finanzas."
    },
    {
      question: "¿Es seguro invertir en criptomonedas?",
      answer: "Como cualquier inversión, las criptomonedas tienen riesgos. Es importante investigar bien y considerar asesoramiento profesional antes de invertir."
    },
    {
      question: "¿Cómo puedo empezar a invertir en criptomonedas?",
      answer: "Para comenzar, necesitas crear una cuenta en un exchange de criptomonedas, transferir fondos y seleccionar las criptomonedas que deseas comprar."
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-12 bg-black text-white">
      <h2 className="text-4xl font-semibold mb-8">Preguntas Frecuentes</h2>
      <div className="w-full max-w-3xl">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <motion.div
              className="p-4 cursor-pointer text-left bg-gray-800 rounded-lg 
                         border-4 border-transparent bg-clip-border 
                         bg-gradient-to-r from-pink-500 to-blue-500"
              onClick={() => toggleQuestion(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-medium">{item.question}</h3>
            </motion.div>

            {openIndex === index && (
              <motion.div
                className="mt-2 p-4 bg-gray-700 rounded-lg"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300 text-lg">{item.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
