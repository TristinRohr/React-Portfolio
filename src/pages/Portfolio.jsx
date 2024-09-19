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
        image="/FMB-logo.webp"
        deployedLink="https://tristinrohr.github.io/Find-My-Brewey/"
        repoLink="https://github.com/TristinRohr/Find-My-Brewey"
        />
      <Project
        title="Potty Partner"
        image="/PP-logo.png"
        deployedLink="https://potty-partner.onrender.com/"
        repoLink="https://github.com/ndzamboni/Potty_Partner"
      />
      <Project
        title="Nexus Insight"
        image="/nexusinsight.png"
        deployedLink="https://nexusinsight.onrender.com/"
        repoLink="https://github.com/TristinRohr/NexusInsight"
      />
      <Project
        title= "Task Manager"
        image= "/TMlogo.webp"
        deployedLink= "https://tristinrohr.github.io/Task-Manager-Project-5/"
        repoLink= "https://github.com/TristinRohr/Task-Manager-Project-5"
      />
      <Project
        title= "Text Editor"
        image= "/JATE-logo.png"
        deployedLink= "https://text-editor-jby0.onrender.com/"
        repoLink= "https://github.com/TristinRohr/text-editor"
      />
      <Project
        title= "Weather Dashboard"
        image= "/WD-logo.webp"
        deployedLink= "https://tristinrohr.github.io/weather/"
        repoLink= "https://github.com/TristinRohr/weather"
      />
    </section>
  </div>
  );
};

export default Portfolio;