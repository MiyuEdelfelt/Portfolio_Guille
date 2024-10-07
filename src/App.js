import React from 'react';
import Navbar from './components/principal/Navbar';
import Home from './components/principal/Home';
import AboutMe from './components/principal/AboutMe';
import ExperienceAndTechnologies from './components/principal/ExperienceAndTechnologies';
import Portfolio from './components/principal/Portfolio';
import Contact from './components//principal/Contact';
import Sidebar from './components/principal/Sidebar';

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Sidebar />
      <main className="pt-20"> {/* Espacio para que el contenido no esté tapado por el navbar fijo */}
        <Home />
        <AboutMe />
        <ExperienceAndTechnologies />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
