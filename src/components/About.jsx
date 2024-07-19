import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto p-4 text-center fade-in">
      <h1 className="text-4xl font-extrabold mb-4 animate-color-change">About Me</h1>
      <p className="text-xl mb-4">I am a passionate developer with experience in building modern web applications.</p>
      <Link to="/contact" className="p-3 bg-brand-green text-white rounded hover:bg-green-700">Contact Me</Link>
    </div>
  );
};

export default About;
