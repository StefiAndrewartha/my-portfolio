import React from 'react';
import ReactDOM from 'react-dom';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">&times;</button>
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Demo</a>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
