// src/pages/Resume.js
// import React from 'react';

const Resume = () => {
  return (
    <section className='resume'>
      <h2>Resume</h2>
      <p><a href="React-Portfolio/src/assets/Resume2024.pdf" download>Download My Resume</a></p>
      
      <h3>Profile</h3>
      <p>
        Aspiring Full-Stack Web Developer with a passion for creating dynamic and responsive web applications. 
        Currently enrolled in a comprehensive Full-Stack Web Development Bootcamp to hone my skills in front-end 
        and back-end technologies. Eager to apply my knowledge and contribute to a dynamic development team.
      </p>

      <h3>Experience</h3>
      <ul className= "experience">
        <li><strong>Solar Consultant</strong> - Top Tier Solar Solutions, Garner, NC (May 2023 - 2024)
          <ul>
            <li>Lead generation and qualified leads for interested homeowners, boosting client acquisition.</li>
            <li>Engaged with potential clients to explain solar energy solutions, improving communication and sales skills.</li>
            <li>Managed customer information and interactions, ensuring accurate and organized records.</li>
          </ul>
        </li>
        <li><strong>Baker</strong> - Harris Teeter, Carthage, NC (June 2021 - May 2023)
          <ul>
            <li>Managed inventory and ordered supplies, ensuring the bakery was well-stocked.</li>
            <li>Prepared baked goods for the sales floor, maintaining high quality and consistency.</li>
            <li>Collaborated with team members to meet customer demands efficiently.</li>
          </ul>
        </li>
        <li><strong>Server</strong> - Bonefish Grill, Southern Pines, NC (2019 - July 2020)
          <ul>
            <li>Provided exceptional customer service, addressing dietary needs and ensuring a positive dining experience.</li>
            <li>Managed multiple tables and orders simultaneously, ensuring timely service.</li>
            <li>Handled customer complaints constructively, improving overall satisfaction.</li>
          </ul>
        </li>
      </ul>

      <h3>Education</h3>
      <ul>
        <li><strong>Full-Stack Web Development Bootcamp</strong> - The Coding Boot Camp at UNC-Chapel Hill (Expected: Sept 2024)</li>
        <li><strong>GED</strong> - Sandhills Community College (Completed: Aug 2013)</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6+), React, Redux, Responsive Design, Bootstrap</li>
        <li><strong>Back-End:</strong> Node.js, Express.js, RESTful APIs, MongoDB, SQL</li>
        <li><strong>Tools:</strong> Git, GitHub, Visual Studio Code, Postman</li>
        <li><strong>Soft Skills:</strong> Problem-Solving, Team Collaboration, Time Management</li>
      </ul>
    </section>
  );
};

export default Resume;