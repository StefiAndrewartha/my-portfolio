import React from 'react';

const projects = [
  {
    name: 'To Do List',
    description: 'A simple to-do list app.',
    demoLink: '/projects/ToDoList/index.html',
    codeLink: 'https://github.com/tu-usuario/ToDoList'
  },
  {
    name: 'Typer-D',
    description: 'A typing speed test app.',
    demoLink: '/projects/TyperD/index.html',
    codeLink: 'https://github.com/tu-usuario/TyperD'
  },
  {
    name: 'Color Game',
    description: 'A color guessing game.',
    demoLink: '/projects/ColorGame/index.html',
    codeLink: 'https://github.com/tu-usuario/ColorGame'
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto p-4 text-center fade-in">
      <h1 className="text-4xl font-extrabold mb-4 animate-color-change">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="card border p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-center space-x-4">
              <a href={project.demoLink} className="p-2 bg-brand-green text-white rounded hover:bg-green-700">Demo</a>
              <a href={project.codeLink} className="p-2 bg-brand-blue text-white rounded hover:bg-blue-700">Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

