import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
