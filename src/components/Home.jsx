import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center fade-in">
      <h1 className="text-5xl font-extrabold mb-4 animate-color-change">Welcome to My Portfolio</h1>
      <p className="text-xl mb-4">Explore my projects and learn more about me.</p>
      <Link to="/projects" className="p-3 bg-brand-green text-white rounded hover:bg-green-700">View Projects</Link>
    </div>
  );
};

export default Home;
