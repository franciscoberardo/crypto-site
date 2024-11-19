import Image from 'next/image';
import Header1 from '../assets/images/header.jpg';

const Header = () => (
    <header className="flex flex-col py-10 items-center text-center text-white bg-black">
        <p className="mb-6 text-lg text-gray-600">Start trading and managing digital assets securely.</p>

        <h1 className="text-8xl font-bold mb-4 w-5/6">
            Increase your capital with <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">criptocurrency</span>
        </h1>
        <p className="mb-6 text-lg text-gray-600">Start trading and managing digital assets securely.</p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-100">
            Get Started
        </button>
        <div className="mt-8 w-4/6">
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
