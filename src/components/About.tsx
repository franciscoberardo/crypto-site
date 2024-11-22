const About = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-48 bg-black text-white">
            <h2 className="text-6xl font-semibold mb-4 w-3/4">
                Liderando el futuro de las inversiones en criptomonedas
            </h2>

            <p className="text-lg text-gray-400 mb-6">
                Explicación de la propuesta de valor, como asesoramiento personalizado y experiencia en blockchain
            </p>

            <div className="overflow-x-auto w-3/4 text-xl">
                <table className="min-w-full text-center border-separate border-[4px] rounded-lg bg-gradient-to-r from-pink-500 to-blue-500">
                    <thead>
                        <tr className="bg-black text-white">
                        </tr>
                    </thead>
                    <tbody className="bg-black text-white">
                        <tr>
                            <td className="px-4 py-6 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white transition-colors duration-300">
                                <p className="font-bold text-2xl">~$300 billion</p>
                                <p className="text-gray-400 text-md">cumulative trading volume to date</p>
                            </td>
                            <td className="px-4 py-6 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="font-bold text-2xl">1 %</h1>
                                <p className="text-md text-gray-400">of the global crypto spot trading volume</p>
                            </td>
                            <td className="px-4 py-6 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="font-bold text-2xl">~60</h1>
                                <p className="text-md text-gray-400">Gravity Teammates (& growing)</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-6 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white transition-colors duration-300">
                                <p className="font-bold text-2xl">30+</p>
                                <p className="text-md text-gray-400">leading global and local crypto exchanges</p>
                            </td>
                            <td className="px-4 py-6 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="font-bold text-2xl">2017</h1>
                                <p className="text-md text-gray-400">start, crypto-natives</p>
                            </td>
                            <td className="px-4 py-6 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="font-bold text-2xl">24/7</h1>
                                <p className="text-md text-gray-400">liquidity</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default About;
