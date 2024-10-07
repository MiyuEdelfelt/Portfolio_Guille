import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen py-16 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-8 text-purple-400">Contacto</h2>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-lg">Nombre</label>
          <input type="text" className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Correo Electrónico</label>
          <input type="email" className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block text-lg">Mensaje</label>
          <textarea className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none" rows="5"></textarea>
        </div>
        <button type="submit" className="bg-purple-700 py-3 px-8 rounded-md hover:bg-purple-800">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
