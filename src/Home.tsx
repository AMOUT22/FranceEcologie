import React, { useState } from 'react';
import pichome from "./background12.jpeg"

function Home() {
    const [selectedRole, setSelectedRole] = useState('proprietaire');

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRole(event.target.value);
    };

    return (
        <div
  className="relative bg-cover bg-center h-screen"
  style={{
    backgroundImage: `url(${pichome})`, 
  }}
>
  <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-gray-100">
    <div className="text-center text-[#ffffff]">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0c4b48]">
        Améliorez la performance énergétique de vos bâtiments
      </h2>
      <p className="text-gray-700 text-lg md:text-xl mb-4">
        Faire des économies d'énergies en 2023, c'est encore possible.
      </p>
      <p className="text-gray-700 text-lg md:text-xl mb-4">
        Votre interlocuteur de confiance pour la rénovation énergétique de votre maison.
      </p>
      <button className="bg-[#0c4b48] text-[#ffffff] font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
        Demander un devis
      </button>
    </div>
  </div>
</div>

      
        
    );
}

export default Home;
