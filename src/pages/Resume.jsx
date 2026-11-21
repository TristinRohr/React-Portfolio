// src/pages/Resume.js
// import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <header className="resume-header">
        <h2>Resume</h2>
        <p className="resume-download">
          <a href={`${import.meta.env.BASE_URL}CybersecuityResume2026.pdf`} download>
            Download My Resume
          </a>
        </p>
      </header>

      <div className="resume-content">
        <section className="resume-section">
          <h3>Profile</h3>
          <p>
            Cybersecurity professional currently pursuing an Associate of Applied
            Science in Computer Engineering Technology with a concentration in
            Cybersecurity. Experienced in conducting security assessments,
            identifying vulnerabilities, evaluating security controls, and
            providing actionable recommendations to improve organizational
            security.
          </p>
          <p>
            With a background in full-stack web development and networking,
            I bring a well-rounded technical perspective to protecting
            systems, applications, and sensitive information. My experience
            includes network security, access controls, vulnerability
            assessments, and security awareness.
          </p>
          <p>
            Passionate about problem-solving, continuous learning, and
            helping organizations strengthen their security posture through
            practical and effective cybersecurity solutions.
          </p>
        </section>

        <section className="resume-section">
          <h3>Skills</h3>
          <ul className="resume-list">
            <li>
              <strong>Cybersecurity:</strong> Vulnerability Assessment,
              Security Auditing, Access Controls, Password Security,
              Security Awareness, Risk Assessment
            </li>
            <li>
              <strong>Networking:</strong> IPv6, EIGRP, BGP, VLANs,
              VPNs, NAT, LAN, WAN, Wireless Network Installation,
              Network Data Backup, Network Activity Logging
            </li>
            <li>
              <strong>Front-End Development:</strong> HTML5, CSS3,
              JavaScript (ES6+), React, Redux, Responsive Design,
              Bootstrap
            </li>
            <li>
              <strong>Back-End Development:</strong> Node.js,
              Express.js, RESTful APIs, MongoDB, SQL
            </li>
            <li>
              <strong>Development Tools:</strong> Git, GitHub,
              Visual Studio Code, Postman
            </li>
            <li>
              <strong>Professional Skills:</strong> Project Management,
              Data Analysis, Report Evaluation, Problem-Solving,
              Team Collaboration, Training and Mentorship
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h3>Experience</h3>
          <ul className="resume-list experience">
            <li>
              <strong>CyberSafe Communities Analyst</strong> -
              CyberSafe Communities, Pinehurst, NC
              (August 2026 - Present)
              <ul>
                <li>
                  Conduct cybersecurity assessments for local businesses
                  and organizations to identify security risks and
                  vulnerabilities.
                </li>
                <li>
                  Analyze existing security practices and provide
                  actionable recommendations to strengthen overall
                  cybersecurity posture.
                </li>
                <li>
                  Evaluate network security, account security, access
                  controls, password practices, data backups, and
                  security awareness.
                </li>
                <li>
                  Help organizations understand potential threats
                  and implement practical security improvements.
                </li>
              </ul>
            </li>

            <li>
              <strong>Solar Sales Consultant</strong> -
              Top Tier Solar Solutions, Garner, NC
              (March 2023 - January 2025)
              <ul>
                <li>
                  Negotiated and closed contracts totaling over
                  $100,000 through direct customer engagement.
                </li>
                <li>
                  Promoted to a lead sales position within 90 days
                  based on performance and rapid skill development.
                </li>
                <li>
                  Achieved a company record for the most closed
                  deals in a single week.
                </li>
                <li>
                  Trained and mentored new employees on sales
                  strategies, customer communication, and
                  canvassing techniques.
                </li>
              </ul>
            </li>

            <li>
              <strong>Lead Baker</strong> -
              Harris Teeter, Carthage, NC
              (April 2021 - March 2023)
              <ul>
                <li>
                  Led daily bakery operations, coordinating
                  production, inventory, and sales demands.
                </li>
                <li>
                  Identified inefficiencies in inventory management
                  and implemented a more effective system.
                </li>
                <li>
                  Reduced average product waste from 8% to 2%
                  through process improvements.
                </li>
                <li>
                  Coordinated team responsibilities to maintain
                  production quality and operational efficiency.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h3>Education</h3>
          <ul className="resume-list">
            <li>
              <strong>
                Associate of Applied Science -
                Computer Engineering Technology,
                Cybersecurity Concentration
              </strong>
              <ul>
                <li>Sandhills Community College</li>
                <li>Expected Graduation: May 2027</li>
              </ul>
            </li>

            <li>
              <strong>Full-Stack Web Development Certificate</strong>
              <ul>
                <li>University of North Carolina at Chapel Hill</li>
                <li>Completed: August 2024</li>
              </ul>
            </li>

            <li>
              <strong>General Education Diploma (GED)</strong>
              <ul>
                <li>Sandhills Community College</li>
                <li>Completed: August 2013</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Resume;