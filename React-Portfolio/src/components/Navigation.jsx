// src/components/Navigation.js
// import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Portfolio</Link>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/aboutme" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;