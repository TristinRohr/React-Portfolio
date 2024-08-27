// src/components/Project.js
// import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink}>Deployed App</a> | 
        <a href={repoLink}>GitHub Repo</a>
      </p>
    </div>
  );
};

export default Project;