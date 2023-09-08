import React, { useState } from 'react';
import pic from './pic.jpeg'


function Section3(){
    return(
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <section className="py-8 flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="w-full md:w-1/2 mx-6">
                <img src={pic} alt="Energy Saving" className="w-auto h-[150px] md:h-auto mx-auto md:mx-0 rounded-md" />
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#003089] mb-4">
                    Comment économiser de l'énergie et de l'argent en moins de 2 minutes
                </h2>
                <p className="text-gray-600 mb-6">
                    Aujourd'hui, une maison non isolée peut perdre jusqu'à 60% de son énergie à travers les murs et le grenier.
                    Cela peut être coûteux à long terme. En installant une isolation extérieure, vous économiserez non seulement
                    de l'énergie, mais réduirez également les dépenses liées à l'énergie jusqu'à 50%.
                    Alors, prenez une décision aujourd'hui qui changera votre demain et testez votre éligibilité maintenant!
                </p>
                <a href="#" className="bg-[#E2001A] text-[#FFFFFF] px-4 py-2 rounded-md transition duration-300">
                    TESTER MON ELIGIBILITE
                </a>
            </div>
        </section>
    </div>
    
    
    );
}

export default Section3;