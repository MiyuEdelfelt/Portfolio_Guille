import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio" className="min-h-screen py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8 text-purple-400">Portafolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="portfolio-card bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-purple-700">
          <img src="ruta/a/imagen-proyecto.jpg" alt="Proyecto" className="w-full h-48 object-cover rounded-md" />
          <h3 className="text-2xl font-bold mt-4">Nombre del Proyecto</h3>
          <a href="link-al-demo" target="_blank" rel="noopener noreferrer" className="text-purple-300 mt-2 inline-block">
            Ver Demo
          </a>
        </div>
        {/* Puedes agregar más proyectos aquí */}
      </div>
    </div>
  );
};

export default Portfolio;
