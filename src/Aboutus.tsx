
import backk from './idk.png'; // Replace with your background image path
import React from 'react';


const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backk})`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-gray-100 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Le bureau d’études J’Éco-Rénov Solutions
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Vous apporte une expertise reconnue quant aux solutions d’économies
          d’énergies pour votre maison.
        </p>
        <p className="text-lg md:text-xl mb-4">
          En activité depuis plus de 10 ans, notre bureau d’études sera votre
          interlocuteur de confiance pour concevoir avec vous, votre projet
          concernant la rénovation énergétique de votre maison.
        </p>
        <p className="text-lg md:text-xl mb-4">
          Notre bureau d’études a ainsi regroupé l’ensemble des savoir-faire
          pour vous faciliter dans vos démarches : audit énergétique de votre
          projet, choix d’un artisan au label RGE, accompagnement administratif
          et financier pour l’octroi de vos aides et subventions, suivi des
          travaux de rénovation énergétique de votre maison, etc.
        </p>
        <button className="bg-[#0c4b48] text-[#ffffff] font-semibold py-3 px-6 rounded-full mt-4 hover:bg-blue-800 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out">
          Contactez-nous
        </button>
      </div>
    </div>
  );
};

export default HeroSection;



