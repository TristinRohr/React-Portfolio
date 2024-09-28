import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const currentPage = useLocation().pathname;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Dark mode toggle function
  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setDarkMode(savedTheme === 'dark');
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '🌙' : '☀️ '}
        </button>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-button">
            Menu
          </button>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li>
              <Link 
                to="/aboutme" 
                className={currentPage === '/aboutme' ? 'dropdown-item active' : 'dropdown-item'} 
                onClick={closeDropdown}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={currentPage === '/portfolio' ? 'dropdown-item active' : 'dropdown-item'} 
                onClick={closeDropdown}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={currentPage === '/contact' ? 'dropdown-item active' : 'dropdown-item'} 
                onClick={closeDropdown}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={currentPage === '/resume' ? 'dropdown-item active' : 'dropdown-item'} 
                onClick={closeDropdown}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;