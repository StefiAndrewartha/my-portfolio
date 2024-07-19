import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <p>Follow me on 
          <a href="https://twitter.com" className="text-brand-green hover:underline"> Twitter</a>, 
          <a href="https://linkedin.com" className="text-brand-green hover:underline"> LinkedIn</a>, 
          <a href="https://github.com" className="text-brand-green hover:underline"> GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
