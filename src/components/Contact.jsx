import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 text-center fade-in">
      <h1 className="text-4xl font-extrabold mb-4 animate-color-change">Contact</h1>
      <p className="text-xl mb-4">Feel free to reach out to me through the following channels:</p>
      <p>Email: <a href="mailto:tu-email@example.com" className="text-brand-blue hover:underline">tu-email@example.com</a></p>
      <p>Phone: <a href="tel:+123456789" className="text-brand-blue hover:underline">+123456789</a></p>
    </div>
  );
};

export default Contact;
