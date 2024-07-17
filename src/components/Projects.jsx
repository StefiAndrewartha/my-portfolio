import React from 'react';

const projects = [
  {
    title: "ColorGame",
    description: "Este es un juego para adivinar colores basado en códigos RGB.",
    demoLink: "/projects/ColorGame/index.html",
    codeLink: "https://github.com/StefiAndrewartha/colorgame",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "ToDoList",
    description: "Una aplicación para gestionar tareas diarias de manera eficiente.",
    demoLink: "/projects/ToDoList/index.html",
    codeLink: "https://github.com/StefiAndrewartha/ToDoList",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    title: "TyperD",
    description: "Un juego de mecanografía para mejorar la velocidad y precisión al teclear.",
    demoLink: "/projects/TyperD/index.html",
    codeLink: "https://github.com/StefiAndrewartha/TyperD",
    imageUrl: "https://via.placeholder.com/300"
  },
];

const Projects = () => (
  <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 slide-in">
    <h2 className="text-3xl mb-4">Proyectos</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="card bg-white dark:bg-gray-700 dark:text-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
          <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-lg" />
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <a href={project.demoLink} className="btn btn-primary mb-2 block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver Demo</a>
          <a href={project.codeLink} className="btn btn-secondary block text-center bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Ver Código</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
