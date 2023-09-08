import React from 'react';

const BlogCard = () => {
  const blogData = [
    {
      id: 1,
      imageSrc: 'https://blog.izi-by-edf.fr/2020/02/iStock-178995466-min-1024x683.jpg',
      title: 'Quel est le coût d’installation d’une borne de recharge pour voiture électrique ?',
      writer: 'John Doe',
      readingTime: 5,
    },
    {
      id: 2,
      imageSrc: 'https://blog.izi-by-edf.fr/2021/02/recharger-voiture-electrique-1024x683.jpg',
      title: 'Installation d’une borne de recharge : quelles aides financières ?',
      writer: 'Jane Smith',
      readingTime: 8,
    },
    {
      id: 3,
      imageSrc: 'https://blog.izi-by-edf.fr/2022/07/comment-savoir-si-mon-logement-est-aux-normes-1024x575.jpg',
      title: 'Comment savoir si l’électricité est aux normes ?',
      writer: 'Bob Johnson',
      readingTime: 6,
    },
  ];

  return (
    <>
     <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogData.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-lg p-4">
          <img src={blog.imageSrc} alt={blog.title} className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">By {blog.writer}</p>
            <div className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 1.875C5.51289 1.875 1.875 5.51289 1.875 10C1.875 14.4871 5.51289 18.125 10 18.125C14.4871 18.125 18.125 14.4871 18.125 10C18.125 5.51289 14.4871 1.875 10 1.875ZM13.75 11.25H10C9.83424 11.25 9.67527 11.1842 9.55806 11.0669C9.44085 10.9497 9.375 10.7908 9.375 10.625V5C9.375 4.83424 9.44085 4.67527 9.55806 4.55806C9.67527 4.44085 9.83424 4.375 10 4.375C10.1658 4.375 10.3247 4.44085 10.4419 4.55806C10.5592 4.67527 10.625 4.83424 10.625 5V10H13.75C13.9158 10 14.0747 10.0658 14.1919 10.1831C14.3092 10.3003 14.375 10.4592 14.375 10.625C14.375 10.7908 14.3092 10.9497 14.1919 11.0669C14.0747 11.1842 13.9158 11.25 13.75 11.25Z" fill="#55B76B"/>
</svg>
              {blog.readingTime}   min read
            </div>
            <button className="mt-4 bg-[#55B76B] hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
  Lire la suite
</button>

          </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default BlogCard;
