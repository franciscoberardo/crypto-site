const About = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center py-48 bg-black text-white">
            <h2 className="text-6xl font-semibold mb-4">
                Liderando el futuro de las inversiones en criptomonedas
            </h2>

            <p className="text-lg text-gray-700 mb-6">
                Explicación de la propuesta de valor, como asesoramiento personalizado y experiencia en blockchain
            </p>

            <div className="overflow-x-auto w-3/4 text-3xl ">
                <table className="min-w-full text-center border-separate" style={{ borderSpacing: '0 10px' }}>
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-16 px-4 py-2 table-bordered-gradient">
                                ~$300 billion
                                <p>cumulative trading
                                    volume to date</p>
                            </td>
                            <td className="px-4 py-2 table-bordered-gradient">
                                <h1>1 %</h1>
                                <p>of the global crypto spot trading volume</p>
                            </td>
                            <td className="px-4 py-2 table-bordered-gradient">
                                <h1>~60</h1>
                                <p>Gravity Teammates(& growing)</p>
                            </td>
                        </tr>
                        <tr>
                            <td className=" py-16 px-4 py-2 table-bordered-gradient">
                                30+
                                <p>leading global and local crypto exchanges</p>
                            </td>
                            <td className="px-4 py-2 table-bordered-gradient">
                                <h1>2017
                                </h1>
                                <p>start, crypto-natives
                                </p>
                            </td>
                            <td className="px-4 py-2 table-bordered-gradient">
                                <h1>24/7
                                </h1>
                                <p>liquidity
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default About;
