import React, { useState } from 'react';

function Services(){
    return(
        <>
        <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-20 z-90 bg-[#55B76B]">
        <section className="py-6 md:cursor-pointer ">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 text-[#ffffff] 'text-center ">Nos services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                <div className=" bg-white rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105 hover:bg-[#0c4b48]">
                    <h1 className='text-center text-2xl text-[#ffffff]'><i className="fa-solid fa-snowflake"></i></h1>
                    <h3 className="text-xl font-semibold mb-4 text-[#ffffff]">Isolation Thermique par l'extérieur</h3>
                    <p className="text-[#ffffff]">
                        Enduits minces sur isolants, bardages, vêtures et vêtages. Tous les traitements spéciaux.
                    </p>
                     
                </div>
                <div className=" bg-white rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105 hover:bg-[#0c4b48]">
                    <h1 className='text-center text-2xl text-[#ffffff]'>   <i className="fa-solid fa-house-chimney"></i></h1>
                    <h3 className="text-xl font-semibold mb-4 text-[#ffffff]">Ravalement de façade</h3>
                    <p className="text-[#ffffff]">
                        Permet de maintenir les murs en bon état et de préserver un bâtiment sain de toute infiltration.
                    </p>
                </div>
                <div className=" bg-white rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105 hover:bg-[#0c4b48]">
                    <h1 className='text-center text-2xl text-[#ffffff]'> <i className="fa-solid fa-house"></i></h1>
                    <h3 className="text-xl font-semibold mb-4 text-[#ffffff]">Maçonnerie & Rénovation</h3>
                    <p className="text-[#ffffff]">
                        Nos domaines d’expertise : Rénovation et home staging.
                    </p>
                </div>
            </div>
        </section>
    </div>
        

        
        
        
        
        </>
        
    );
}

export default Services;


