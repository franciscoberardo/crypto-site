// components/CryptoIcons.js
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

const CryptoIcons = () => {
  return (
    <div className="flex space-x-6 mb-6">
      <div className="bg-yellow-500 rounded-full p-2">
        <FaBitcoin size={26} className="text-white" />
      </div>
      <div className="bg-gray-900 rounded-full p-2">
        <FaEthereum size={26} className="text-white" />
      </div>
      <div className="bg-gray-600 rounded-full p-2">
        <BsCoin size={26} className="text-white" />
      </div>
    </div>
  );
};

export default CryptoIcons;
