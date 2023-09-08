import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./Annotation_2023-08-12_172940-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const[open, setOpen]=useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='bg-[#55B76B] sticky top-0 z-50'>
        <div className='flex items-center font-medium justify-around '>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                <img src={logo} alt="logo" className='md:cursor-pointer h-9'/>
                <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
                {open ? (
                      <>
                        
                        <i className="fa-solid fa-xmark text-[#ffffff]  "></i>
                      </>
                    ) : (
                      <i className="fa-solid fa-bars text-[#ffffff]"></i>
                    )}
                    </div>
            </div>
           <ul className='md:flex hidden cursor-pointer flex items-center gap-8 text-xs text-[#ffffff]'>
            <li className='py-7 px-3 text-sminline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'>                
                    <button className='flex items-center space-x-2 focus:outline-none'onClick={toggleDropdown}>
                    <span>MON PROJET</span>
                        <svg
                          className={`h-4 w-4 transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                    </button>
                        {isDropdownOpen && (
                          <div className='absolute top-8 left-0 bg-[#ffffff] border mt-6 border-gray-300 shadow-lg rounded-md p-2 mt-2 w-40 h-32 space-y-2  text-[#000000]'>
                            <a href='#' className='block text-gray-800 hover:text-blue-500'>Comprendre la rénovation énergétique</a>
                            <a href='#' className='block text-gray-800 hover:text-blue-500'>Faire des économies d'énergie</a>
                            <a href='#' className='block text-gray-800 hover:text-blue-500'>Bien démarrer son projet</a>
                          
                          </div>
                        )}
                </li>
                      <li className='py-7 px-3 inline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'> MES AIDES</li>
            <li className='py-7 px-3 inline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'> MON FINANCEMENT</li>
            <li className='py-7 px-3 inline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'> MES TRAVAUX</li>
            <li className='py-7 px-3 inline-block bg-primary'>
              </li>
           </ul>
           <div className='md:flex hidden'>
           <button className="bg-[#0c4b48] text-[#FFFFFF] text-xs text-white py-2 px-6 rounded-md hover:bg-[#0c4b48]"> CONTACTER NOUS</button>
           </div>
          

     
                <ul   className={`cursor-pointer
        md:hidden bg-[#55B76B] text-[#ffffff] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>                
                    <li className='py-7 px-3 '> MON PROJET</li>
                    <li className='py-7 px-3'> MES AIDES</li>
                    <li className='py-7 px-3'> MON FINANCEMENT</li>
                    <li className='py-7 px-3'> MES TRAVAUX</li> 
                    <div className='py-5 '>
              <button className="bg-[#0c4b48] text-[#FFFFFF] font-bold py-2 px-6 rounded">NOUS CONTACTER</button>
           </div>
              </ul>
             
           
          
           
        </div>

    </nav>
    
  );
}

export default Navbar;
