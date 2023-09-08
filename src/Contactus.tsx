import React from 'react';

const SubscribeForm = () => {
  return (
    <div
      className="bg-cover bg-center h-96 flex justify-center items-center"
      style={{ backgroundImage: 'url(https://izi-by-edf.fr/cdn-cgi/image/width=1000,height=1900/cdn/bundles/herculepage/images/pattern.png?v=v10.6-release)' }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center bg-[#55B76B]">
        <h2 className="text-2xl font-semibold mb-4 text-[#ffffff]">Abonnez-vous à notre newsletter</h2>
        <p className="text-green-500 mb-4 text-[#ffffff]">Rejoignez notre communauté verte et recevez des offres exclusives et un contenu instructif directement dans votre boîte de réception !</p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300"
          />
        </div>
        <button className="bg-[#0c4b48] text-[#ffffff] hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          Soumettre
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
