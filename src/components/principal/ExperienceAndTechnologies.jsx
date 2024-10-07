import React from 'react';

const ExperienceAndTechnologies = () => {
  return (
    <div id="experience" className="min-h-screen py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-purple-400">Experiencia & Tecnologías</h2>
      
      <div className="experience mb-12">
        <h3 className="text-3xl font-semibold text-purple-300 mb-4">Experiencia Laboral</h3>
        <p className="leading-relaxed text-lg">
          Aquí puedes incluir una línea de tiempo o una lista de tus trabajos y logros.
        </p>
      </div>
      
      <div className="technologies grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="card bg-black p-6 rounded-xl shadow-lg text-center hover:bg-purple-800">
          <span className="text-3xl">⚛️</span>
          <p className="mt-4">React</p>
        </div>
        <div className="card bg-black p-6 rounded-xl shadow-lg text-center hover:bg-purple-800">
          <span className="text-3xl">🌐</span>
          <p className="mt-4">Tailwind CSS</p>
        </div>
        {/* Puedes agregar más tecnologías aquí */}
      </div>
    </div>
  );
};

export default ExperienceAndTechnologies;
