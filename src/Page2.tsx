import React, { useState } from 'react';
import feuille from './Group54.png'

function Page2() {


    return (
        <section className='p-5 container mx-auto flex flex-col md:flex-row'>
            
            <div className='md:w-1/2 pr-0 md:pr-8'>
                <h2 className='my-2 text-3xl font-semibold text-center md:text-left text-[#000000]'>
                Quelles sont les étapes à suivre pour profiter de l'isolation thermique à l'extérieure ?
                </h2>
                
            </div>

    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4  '>
    <div className='inline-block inline-flex flex flex-col '>
        <div className=" hover:bg-[#0c4b48] hover:text-[#ffffff]  max-w-sm p-6 bg-white border border-gray-200 mx-3 rounded-lg shadow hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 flex-grow text-[#000000]">
            <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <i className="fa-solid fa-arrow-pointer"></i>
                </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">1. Remplir le formulaire d'éligibilité</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> 
        </div>
    </div>

    <div className='inline-block inline-flex flex flex-col'>
        <div className=" hover:bg-[#0c4b48] hover:text-[#ffffff] max-w-sm p-6 bg-white border border-gray-200 mx-3 rounded-lg shadow hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 flex-grow text-[#000000]">
            <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <i className="fa-solid fa-list-check"></i>
                </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">2. Recevez des offres personnalisées</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

    <div className='inline-block inline-flex flex flex-col'>
        <div className="hover:bg-[#0c4b48] hover:text-[#ffffff] max-w-sm p-6 bg-white border border-gray-200 mx-3 rounded-lg shadow hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 flex-grow text-[#000000]">
            <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <i className="fa-solid fa-check-to-slot"></i>
                </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">3. Prenez rendez-vous avec nos professionnels</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

    <div className='inline-block inline-flex flex flex-col'>
        <div className="hover:bg-[#0c4b48] hover:text-[#ffffff] max-w-sm p-6 bg-white border border-gray-200 mx-3 rounded-lg shadow hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 flex-grow text-[#000000]">
            <a href="#">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <i className="fa-solid fa-house-chimney"></i>
                </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">4. Réalisez vos travaux et économisez</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</div>      
        </section>
    );
}

export default Page2;


