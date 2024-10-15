import React from 'react';

const AboutMe = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center items-center py-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-purple-400 text-center">Sobre mí</h2>
      <p className="leading-relaxed text-lg max-w-3xl text-center">
        Soy un desarrollador apasionado por crear aplicaciones web y móviles con un enfoque en tecnologías modernas. Tengo experiencia trabajando con frameworks como React, y bases de datos como PostgreSQL, MySQL y SQL Server.
      </p>
    </div>
  );
};

export default AboutMe;
