import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo" onClick={() => handleNavClick('home')}>
            <FontAwesomeIcon icon={faPhone} className="logo-icon" />
            <span className="logo-text">SV Electricals</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              <li>
                <button 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
                  onClick={() => handleNavClick('services')}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  className={`nav-link ${currentPage === 'reviewpage' ? 'active' : ''}`}
                  onClick={() => handleNavClick('reviewpage')}
                >
                  Customer Reviews
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="header-contact">
            <a href="tel:+1234567890" className="btn btn-primary">
              <FontAwesomeIcon icon={faPhone} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list-mobile">
            <li>
              <button 
                className={`nav-link-mobile ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-mobile ${currentPage === 'services' ? 'active' : ''}`}
                onClick={() => handleNavClick('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-mobile ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-mobile ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-mobile ${currentPage === 'reviewpage' ? 'active' : ''}`}
                onClick={() => handleNavClick('reviewpage')}
              >
                Customer Reviews
              </button>
            </li>
            <li>
              <a href="tel:+1234567890" className="btn btn-primary mobile-contact-btn">
                <FontAwesomeIcon icon={faPhone} />
                Call Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;