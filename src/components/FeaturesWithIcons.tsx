import { FaLock, FaGift, FaGlobe, FaDatabase, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

const FeaturesWithIcons = () => {
  const features = [
    {
      icon: <FaLock className="text-3xl text-white" />,
      title: "Safe & Secure",
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor.",
    },
    {
      icon: <FaGift className="text-3xl text-white" />,
      title: "Early Bonus",
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor.",
    },
    {
      icon: <FaGlobe className="text-3xl text-white" />,
      title: "Universal Access",
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor.",
    },
    {
      icon: <FaDatabase className="text-3xl text-white" />,
      title: "Secure Storage",
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-white" />,
      title: "Low Cost",
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor.",
    },
    {
      icon: <FaChartLine className="text-3xl text-white" />,
      title: "Several Profit",
      description:
        "Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor.",
    },
  ];

  return (
    <div className="py-10 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4 p-4  rounded-lg hover:shadow-lg hover:bg-gray-800 transition"
                >
                    {/* Icono con fondo de círculo */}
                    <div
                        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00BFFF] bg-opacity-90"
                    >
                        {feature.icon}
                    </div>
                    <h2 className="text-xl font-bold">{feature.title}</h2>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default FeaturesWithIcons;
