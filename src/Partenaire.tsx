import React from 'react';
import anatra from './anatra.png';
import edf from './edf.png';
import total from './total.png';
import engie from './engie.png';

function Partenaire() {
    return (
        <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-20 bg-[#55B76B]">
            <section className="py-20"> {/* Increased padding for more height */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 text-[#ffffff]">
                    Nos partenaires qui financent vos projets
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:bg-[#0c4b48] hover:text-white transition duration-300">
                        <img src={anatra} alt="Antargaz" className="h-12" />
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:bg-[#0c4b48] hover:text-white transition duration-300">
                        <img src={edf} alt="Total Direct Energie" className="h-12" />
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:bg-[#0c4b48] hover:text-white transition duration-300">
                        <img src={total} alt="EDF" className="h-12" />
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:bg-[#0c4b48] hover:text-white transition duration-300">
                        <img src={engie} alt="Engie" className="h-12" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Partenaire;
