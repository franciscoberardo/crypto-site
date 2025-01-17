import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }; 
  

  return (
    <section className="py-6 px-3 md:py-8 md:px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4 items-center">
        {/* Título principal */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">Contact us</h1>
          <h2 className="text-2xl font-bold text-sky-blue-transparent">Get in touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Campo del nombre */}
          <motion.div
            className="space-y-2"
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-slate-800 p-2 border-2 border-blue-500 rounded-md"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          {/* Campo del email */}
          <motion.div
            className="space-y-2"
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-slate-800 p-2 border-2 border-blue-500 rounded-md"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
        </div>

        {/* Campo del mensaje */}
        <motion.div
          className="space-y-2 mt-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-slate-800 p-2 border-2 border-blue-500 rounded-md"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </motion.div>

        {/* Botón de envío */}
        <motion.div
          className="text-center mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-6 py-2 text-lg bg-blue-800 text-white rounded-full border-2 border-white"
            whileHover={{ scale: 1.05 }}
            type="submit"
          >
            Send message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
