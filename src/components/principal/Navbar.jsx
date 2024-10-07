import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-black via-purple-900 to-indigo-800 text-white fixed w-full top-0 z-50">
      <div className="text-3xl font-bold tracking-widest">Portafolio</div>
      <div className="flex space-x-8">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#about" className="hover:text-purple-400">Sobre mí</a>
        <a href="#experience" className="hover:text-purple-400">Experiencia</a>
        <a href="#portfolio" className="hover:text-purple-400">Portafolio</a>
        <a href="#contact" className="hover:text-purple-400">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
