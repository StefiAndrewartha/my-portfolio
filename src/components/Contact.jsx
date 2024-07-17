import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Formulario enviado');
  };

  return (
    <section id="contact" className="p-8 bg-white dark:bg-gray-900 dark:text-gray-200 slide-in">
      <h2 className="text-3xl mb-4">Contacto</h2>
      <form className="contact-form grid gap-4" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block">
          Nombre:
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border rounded focus:border-blue-500 focus:shadow-outline"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email" className="block">
          Correo Electrónico:
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border rounded focus:border-blue-500 focus:shadow-outline"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message" className="block">
          Mensaje:
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full p-2 border rounded focus:border-blue-500 focus:shadow-outline"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
