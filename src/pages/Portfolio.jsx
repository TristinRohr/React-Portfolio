// src/pages/Portfolio.js
// import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
    {/* <h2>Portfolio</h2> */}
    <section className='portfolio'>
      <Project
        title="Find My Brewery"
        image="/src/assets/FMB-logo.webp"
        deployedLink="https://tristinrohr.github.io/Find-My-Brewey/"
        repoLink="https://github.com/TristinRohr/Find-My-Brewey"
        />
      <Project
        title="Potty Partner"
        image="/src/assets/PP-logo.png"
        deployedLink="https://potty-partner.onrender.com/"
        repoLink="https://github.com/ndzamboni/Potty_Partner"
      />
      <Project
        title="Live LOL Tracker"
        image="/src/assets/LLT-logo.jpeg"
        deployedLink=""
        repoLink="https://github.com/TristinRohr/Live-LOL-Tracker"
      />
      <Project
        title= "Task Manager"
        image= "/src/assets/TMlogo.webp"
        deployedLink= "https://tristinrohr.github.io/Task-Manager-Project-5/"
        repoLink= "https://github.com/TristinRohr/Task-Manager-Project-5"
      />
      <Project
        title= "Text Editor"
        image= "/src/assets/JATE-logo.png"
        deployedLink= "https://text-editor-jby0.onrender.com/"
        repoLink= "https://github.com/TristinRohr/text-editor"
      />
      <Project
        title= "Weather Dashboard"
        image= "/src/assets/WD-logo.webp"
        deployedLink= "https://tristinrohr.github.io/weather/"
        repoLink= "https://github.com/TristinRohr/weather"
      />
    </section>
  </div>
  );
};

export default Portfolio;