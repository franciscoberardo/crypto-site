import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial: "Thanks to this incredible consultancy, I've been able to maximize my crypto portfolio. The advice is always spot on and tailored to my risk profile.",
  },
  {
    name: "Emma Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial: "I’ve never been more confident in my investments. This team’s market analysis is top-notch, and I’ve seen a significant return on my investment in a short time.",
  },
  {
    name: "David Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    testimonial: "As someone new to crypto, I was initially hesitant, but this consultancy helped me understand the market and build a solid investment strategy. My profits have been impressive!",
  },
  {
    name: "Sophia Williams",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    testimonial: "The team provided clear and insightful advice that has helped me diversify my investments and reduce my risks in the crypto market. Highly recommended!",
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    testimonial: "Incredible experience! The team at this consultancy provides timely updates and valuable insights that have made a huge difference in my portfolio’s growth.",
  },
  {
    name: "Isabella Garcia",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    testimonial: "I’ve been working with this consultancy for several months, and the growth in my crypto investments speaks for itself. They really know the market.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center mt-10">
      {/* Header */}
      <motion.div
        className="w-screen flex items-center justify-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="font-bold text-sky-blue-transparent text-2xl text-center">
            TESTIMONIALS
          </h1>
          <motion.h1
            className="text-5xl font-bold px-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            className="text-lg px-4 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2 }}
          >
            "Our crypto investment strategies have helped countless clients grow their wealth in this exciting and fast-paced market. Don't just take our word for it—see what our clients have to say about their success!"
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className="w-4/5 py-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`Client ${index + 1}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 italic">
                {testimonial.testimonial}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
