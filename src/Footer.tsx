import logo from "./Annotation_2023-08-12_172940-removebg-preview.png";

function Footer() {
    return (
        <footer className="bg-[#55B76B] text-[#ffffff] py-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
                
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="md:order-1">
                    <img src={logo} alt="logo" className='md:cursor-pointer h-9'/>
                        <p>Des solutions d'énergie pour la vie.</p>
                    </div>
                    <div className="md:order-2 ">
                    <a href=""><i className="fa-brands fa-facebook m-2"></i></a>
                    <a href=""><i className="fa-brands fa-instagram m-2"></i></a>
                    <a href=""> <i className="fa-brands fa-google m-2"></i></a>
                   
                    </div>
                    <div className="md:order-1 mb-4 md:mb-0">
                        
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-6 mt-6 md:flex md:justify-between md:items-center">
                    <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-300 transition duration-300">Accueil</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition duration-300">Avis client</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition duration-300">Votre vie privée</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition duration-300">Informations légales</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition duration-300">Cookies</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition duration-300">Protection de vos données</a>
                        </li>
                    </ul>
                    <div className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300 transition duration-300">Qui sommes-nous ?</a>
                        <span className="text-gray-400 mx-2">|</span>
                        <a href="#" className="hover:text-gray-300 transition duration-300">En savoir plus</a>
                        <span className="text-gray-400 mx-2">|</span>
                        <a href="#" className="hover:text-gray-300 transition duration-300">Nous contacter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;