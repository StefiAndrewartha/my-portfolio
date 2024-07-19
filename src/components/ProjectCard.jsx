import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="card p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105">
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
