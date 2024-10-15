import React from 'react';

// Asegúrate de tener un archivo de sonido en la carpeta 'public' de tu proyecto
// const bubbleSound = new Audio('/bubble-sound.mp3');

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🌐' },
  { name: 'SQL Server', icon: '💾' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'CSS', icon: '🎨' },
  { name: 'HTML', icon: '📝' },
  { name: 'ASP.NET', icon: '💻' },
  { name: 'C#', icon: '🔧' }
];

const ExperienceAndTechnologies = () => {
  const handleMouseEnter = () => {
    // Reproduce el sonido cuando el mouse entra en la tarjeta
    // bubbleSound.play();
  };

  return (
    <div id="experience" className="min-h-screen flex flex-col justify-center items-center py-16 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-purple-400 text-center">Experiencia & Tecnologías</h2>
      
      <div className="experience mb-12 text-center max-w-4xl">
        <h3 className="text-3xl font-semibold text-purple-300 mb-4">Experiencia Laboral</h3>
        <p className="leading-relaxed text-lg">
          Aquí puedes incluir una línea de tiempo o una lista de tus trabajos y logros.
        </p>
      </div>
      
      <div className="technologies grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="card bg-black p-6 rounded-xl shadow-lg text-center hover:bg-purple-800 transform transition-transform duration-300 hover:scale-105"
            onMouseEnter={handleMouseEnter}
          >
            <span className="text-3xl">{tech.icon}</span>
            <p className="mt-4">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAndTechnologies;
