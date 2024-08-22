// src/pages/Portfolio.js
// import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project
        title="Find My Brewery"
        image="React-Portfolio/src/assets/FMB-logo.webp"
        deployedLink="https://tristinrohr.github.io/Find-My-Brewey/"
        repoLink="https://github.com/TristinRohr/Find-My-Brewey"
        />
      <Project
        title="Potty Partner"
        image="React-Portfolio/src/assets/PP-logo.png"
        deployedLink="https://potty-partner.onrender.com/"
        repoLink="https://github.com/ndzamboni/Potty_Partner"
      />
      <Project
        title="Live LOL Tracker"
        imgae="React-Portfolio/src/assets/LLT-logo.webp"
        deployedLink="Coming Soon!"
        repoLink="https://github.com/TristinRohr/Live-LOL-Tracker"
      />
    </section>
  );
};

export default Portfolio;