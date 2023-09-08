import { useState, useEffect } from 'react';

const cards = [
    {
        title: 'Pierre Charbonneau| Meuse (55)',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        description: "Je tiens à dire à quel point je suis satisfaite du travail réalisé par France Écologie. Ils m'ont offert un travail professionnel. Ils étaient exceptionnellement courtois et leur nettoyage était exceptionnel. Je recommande France Écologie.",
        google: 'https://uploads-ssl.webflow.com/5c7cf9e8ced3c74795e2d9cb/5c7cf9e8ced3c7785ae2da34_40340636-0-1024px-Google--G--Lo.png',
        stars: 'fa-solid fa-star',
    },
    {
        title: 'Marie Rouanet| Haute-Loire (43)',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        description: "France Écologie m'a fourni des travailleurs ponctuels, a répondu aux questions de manière professionnelle et n'a pas perdu de temps lors de l'exécution du travail.",
        google: 'https://uploads-ssl.webflow.com/5c7cf9e8ced3c74795e2d9cb/5c7cf9e8ced3c7785ae2da34_40340636-0-1024px-Google--G--Lo.png',
        stars: 'fa-solid fa-star',
    },
    {
        title: 'Thibault Leduc | Doubs (25)',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: "France Écologie a fait la mise à niveau de l'isolation de ma maison en moins de 3 heures. Je suis satisfait des résultats et du soutien continu qu'ils fournissent.",
        google: 'https://uploads-ssl.webflow.com/5c7cf9e8ced3c74795e2d9cb/5c7cf9e8ced3c7785ae2da34_40340636-0-1024px-Google--G--Lo.png',
        stars: 'fa-solid fa-star',
    },
];

function TestimonialsSection() {
    return (
        <div className=" mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
            <section className="py-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 text-[#55B76B]">
                    Plus de 15 000 clients satisfaits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6  hover:text-white transition duration-300"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <img src={card.image} alt={card.title} className="object-cover max-h-[200px] w-[150px] h-[150px] rounded-full" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2 text-[#55B76B]">
                                    {card.title}
                                </h3>
                                <img src={card.google} className="mx-auto max-h-9 w-15 h-15" alt="Google Avis" />

                                <div className="flex justify-center mb-2 my-4 text-[#F8BC24]">
                                    <i className={card.stars}></i>
                                    <i className={card.stars}></i>
                                    <i className={card.stars}></i>
                                    <i className={card.stars}></i>
                                    <i className={card.stars}></i>
                                </div>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TestimonialsSection;
