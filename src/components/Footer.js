import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  const emergencyPhone = "9705072945";
  const emergencyEmail = "yandapallivasu225@gmail.com";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <FontAwesomeIcon icon={faPhone} className="footer-logo-icon" />
              <span className="footer-logo-text">SV Electricals</span>
            </div>
            <p className="footer-description">
              Your trusted partner for all electrical needs. Professional, 
              reliable, and safe electrical services for homes and businesses.
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>{emergencyPhone}</span>
              </div>
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{emergencyEmail}</span>
              </div>
              <div className="footer-contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>123 Electric Avenue, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#emergency">Emergency Service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#residential">Residential Wiring</a></li>
              <li><a href="#commercial">Commercial Electrical</a></li>
              <li><a href="#lighting">Lighting Installation</a></li>
              <li><a href="#panel">Panel Upgrades</a></li>
              <li><a href="#repairs">Electrical Repairs</a></li>
              <li><a href="#inspections">Safety Inspections</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="footer-section">
            <h3>Business Hours</h3>
            <div className="footer-hours">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">Emergency Only</span>
              </div>
            </div>
            <div className="emergency-notice">
              <p>24/7 Emergency Service Available</p>
              <a href={`tel:${emergencyPhone}`} className="emergency-link">
                <FontAwesomeIcon icon={faPhone} />
                Emergency: {emergencyPhone}
              </a>
              <p>Email: <a href={`mailto:${emergencyEmail}`}>{emergencyEmail}</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} SV Electricals. All rights reserved.</p>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;