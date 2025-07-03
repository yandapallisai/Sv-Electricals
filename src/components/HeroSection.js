import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

const emergencyName = 'Vasu';
const emergencyPhone = '9705072945';
const emergencyEmail = 'yandapallivasu225@gmail.com';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Trusted Local Electricians
            </h1>
            <p className="hero-subtitle">
              Professional, licensed, and insured electrical services for your home and business. 
              We provide reliable solutions with safety as our top priority.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <FontAwesomeIcon icon={faPhone} className="feature-icon" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faEnvelope} className="feature-icon" />
                <span>Licensed & Insured</span>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faArrowRight} className="feature-icon" />
                <span>Free Estimates</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a href={`tel:${emergencyPhone}`} className="btn btn-primary hero-btn">
                <FontAwesomeIcon icon={faPhone} />
                Call Now
              </a>
              <a href="#contact" className="btn btn-outline hero-btn">
                Get Free Quote
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-card">
              <div className="hero-card-header">
                <h3>Emergency Service - {emergencyName}</h3>
                <p>Available 24/7</p>
              </div>
              <div className="hero-card-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{emergencyPhone}</span>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>{emergencyEmail}</span>
                  </div>
                </div>
                <a href={`tel:${emergencyPhone}`} className="btn btn-primary emergency-btn">
                  Emergency Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;