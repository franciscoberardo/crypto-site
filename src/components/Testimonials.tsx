import { motion } from "framer-motion";
import Image from "next/image";

const testimonialsData = [
  {
    name: "John Doe",
    image: "https://picsum.photos/id/1005/64/64", // Hombre joven
    testimonial: "Thanks to this incredible consultancy, I&apos;ve been able to maximize my crypto portfolio. The advice is always spot on and tailored to my risk profile.",
  },
  {
    name: "Emma Smith",
    image: "https://picsum.photos/id/1027/64/64", // Mujer con cabello oscuro
    testimonial: "I’ve never been more confident in my investments. This team’s market analysis is top-notch, and I’ve seen a significant return on my investment in a short time.",
  },
  {
    name: "David Johnson",
    image: "https://picsum.photos/id/1001/64/64", // Hombre con barba
    testimonial: "As someone new to crypto, I was initially hesitant, but this consultancy helped me understand the market and build a solid investment strategy. My profits have been impressive!",
  },
  {
    name: "Sophia Williams",
    image: "https://picsum.photos/id/1012/64/64", // Mujer profesional rubia
    testimonial: "The team provided clear and insightful advice that has helped me diversify my investments and reduce my risks in the crypto market. Highly recommended!",
  },
  {
    name: "Michael Brown",
    image: "https://picsum.photos/id/1021/64/64", // Hombre de mediana edad
    testimonial: "Incredible experience! The team at this consultancy provides timely updates and valuable insights that have made a huge difference in my portfolio’s growth.",
  },
  {
    name: "Isabella Garcia",
    image: "https://picsum.photos/id/1011/64/64", // Mujer joven sonriente
    testimonial: "I’ve been working with this consultancy for several months, and the growth in my crypto investments speaks for itself. They really know the market.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center mt-10">
      {/* Header */}
      <motion.div
        className="w-full flex items-center justify-center relative"
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
            className="text-4xl md:text-5xl font-bold px-4"
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
            &quot;Our crypto investment strategies have helped countless clients grow their wealth in this exciting and fast-paced market. Don&apos;t just take our word for it—see what our clients have to say about their success!&quot;
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="w-full py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={`Client ${index + 1}`}
                  className="w-16 h-16 rounded-full object-cover"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 italic">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
