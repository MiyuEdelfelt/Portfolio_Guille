import React from 'react';

const Home = () => {
  return (
    <div id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-800 text-center text-white">
      <img
        src="ruta/a/tu-imagen.jpg"
        alt="Foto personal"
        className="rounded-full h-48 w-48 border-4 border-purple-400 shadow-xl"
      />
      <h1 className="text-5xl font-extrabold mt-6">Hola, soy Guillermo</h1>
      <p className="mt-4 text-xl max-w-xl">Soy desarrollador web, especializado en React, Node.js y tecnologías modernas.</p>
    </div>
  );
};

export default Home;
