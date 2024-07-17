import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div className="App bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
    <Header />
    <main className="pt-16">
      <About />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
