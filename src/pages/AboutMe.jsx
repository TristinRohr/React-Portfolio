// src/pages/AboutMe.js
// import React from 'react';

const AboutMe = () => {
  const profileImage = `${import.meta.env.BASE_URL}profilecopy.jpeg`;

  return (
    <section className='aboutMe'>
      <h2>About Me</h2>
      <img src={profileImage} alt="Tristin Rohr" />
      <p>Tristin Rohr - Cybersecurity Professional</p>
      <p>I am a cybersecurity professional pursuing an Associate of Applied Science in Computer Engineering Technology with a concentration in cybersecurity. I have experience conducting security assessments, identifying vulnerabilities, evaluating security controls, and providing practical recommendations to strengthen organizational security. My background in full-stack web development and networking gives me a broader understanding of systems, applications, and network infrastructure. I am passionate about problem-solving, continuous learning, and helping organizations protect sensitive information through effective security solutions.</p>
    </section>
  );
};

export default AboutMe;