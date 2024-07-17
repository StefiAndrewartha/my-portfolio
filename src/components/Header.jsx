import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-lg">
      <h1 className="text-2xl">Mi Portafolio</h1>
      <nav className="flex space-x-4">
        <a href="#about" className="hover:text-yellow-300">Sobre Mí</a>
        <a href="#projects" className="hover:text-yellow-300">Proyectos</a>
        <a href="#contact" className="hover:text-yellow-300">Contacto</a>
        <button onClick={toggleDarkMode} className="ml-4 bg-yellow-500 px-3 py-2 rounded hover:bg-yellow-600">
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
