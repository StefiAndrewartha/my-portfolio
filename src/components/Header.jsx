import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <nav className="bg-brand-blue text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold animate-color-change">My Portfolio</h1>
        <ul className="flex space-x-4 text-lg">
          <li><Link to="/" className="hover:text-brand-green">Home</Link></li>
          <li><Link to="/projects" className="hover:text-brand-green">Projects</Link></li>
          <li><Link to="/about" className="hover:text-brand-green">About</Link></li>
          <li><Link to="/contact" className="hover:text-brand-green">Contact</Link></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;

