import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-1/4 z-50">
      <ul className="space-y-6">
        <li className="group flex items-center p-4 bg-purple-800 rounded-r-full transform hover:translate-x-2 transition-transform duration-200">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white group-hover:text-black">GitHub</a>
        </li>
        <li className="group flex items-center p-4 bg-purple-800 rounded-r-full transform hover:translate-x-2 transition-transform duration-200">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white group-hover:text-black">LinkedIn</a>
        </li>
        <li className="group flex items-center p-4 bg-purple-800 rounded-r-full transform hover:translate-x-2 transition-transform duration-200">
          <a href="mailto:tuemail@gmail.com" className="text-white group-hover:text-black">Gmail</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
