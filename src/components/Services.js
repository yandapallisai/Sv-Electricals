import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBuilding, 
  faLightbulb, 
  faBolt, 
  faWrench,
  faShieldAlt,
  faExclamationTriangle,
  faPlug,
  faTools,
  faCheckCircle,
  faClock,
  faDollarSign,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = ({ fullPage = false }) => {
  const services = [
    {
      icon: faHome,
      title: "Residential Wiring",
      description: "Complete electrical wiring solutions for homes, apartments, and residential properties.",
      benefits: ["Code compliant installations", "Safety inspections", "Warranty coverage", "Professional finish"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: faBuilding,
      title: "Commercial Electrical",
      description: "Electrical systems for offices, retail spaces, warehouses, and commercial buildings.",
      benefits: ["Scalable solutions", "Energy efficiency", "Minimal disruption", "24/7 support"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: faLightbulb,
      title: "Lighting Installation",
      description: "Modern lighting solutions including LED upgrades, smart lighting, and decorative fixtures.",
      benefits: ["Energy savings", "Enhanced aesthetics", "Smart controls", "Longer lifespan"],
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      icon: faBolt,
      title: "Panel Upgrades",
      description: "Electrical panel upgrades and replacements for improved safety and capacity.",
      benefits: ["Increased capacity", "Enhanced safety", "Modern technology", "Future-proofing"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: faWrench,
      title: "Electrical Repairs",
      description: "Fast and reliable repair services for all electrical issues and malfunctions.",
      benefits: ["Quick response", "Diagnostic expertise", "Quality parts", "Guaranteed work"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: faShieldAlt,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections for homes and businesses.",
      benefits: ["Code compliance", "Safety assurance", "Detailed reports", "Preventive maintenance"],
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      icon: faExclamationTriangle,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent repairs and power restoration.",
      benefits: ["24/7 availability", "Rapid response", "Emergency expertise", "Peace of mind"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: faPlug,
      title: "Outlet & Switch Installation",
      description: "Installation and replacement of outlets, switches, and electrical fixtures.",
      benefits: ["Modern upgrades", "Safety compliance", "Professional installation", "Warranty coverage"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const whyChooseUs = [
    {
      icon: faCheckCircle,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your protection and peace of mind."
    },
    {
      icon: faClock,
      title: "Prompt Service",
      description: "We respect your time with punctual arrivals and efficient work."
    },
    {
      icon: faDollarSign,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprises."
    },
    {
      icon: faTools,
      title: "Quality Workmanship",
      description: "Expert craftsmanship backed by our satisfaction guarantee."
    }
  ];

  return (
    <section className={`services ${fullPage ? 'full-page' : ''}`}>
      <div className="container">
        {/* Services Overview (for homepage) */}
        {!fullPage && (
          <div className="services-overview">
            <h2>Our Services</h2>
            <p className="services-subtitle">
              Comprehensive electrical solutions for homes and businesses
            </p>
            <div className="services-grid">
              {services.slice(0, 6).map((service, index) => (
                <div key={index} className="service-card">
                  <FontAwesomeIcon icon={service.icon} className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            <div className="services-cta">
              <a href="#contact" className="btn btn-primary">View All Services</a>
            </div>
          </div>
        )}

        {/* Full Services Page */}
        {fullPage && (
          <>
            <div className="services-header">
              <h1>Our Services</h1>
              <p className="services-intro">
                From residential wiring to commercial electrical systems, we provide comprehensive 
                electrical solutions with safety, quality, and reliability as our top priorities.
              </p>
            </div>

            {/* Detailed Services */}
            <div className="detailed-services">
              {services.map((service, index) => (
                <div key={index} className="service-detail-card">
                  <div className="service-detail-content">
                    <div className="service-detail-text">
                      <div className="service-detail-header">
                        <FontAwesomeIcon icon={service.icon} className="service-detail-icon" />
                        <h2>{service.title}</h2>
                      </div>
                      <p className="service-detail-description">{service.description}</p>
                      <div className="service-benefits">
                        <h3>What you get:</h3>
                        <ul>
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex}>
                              <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href="#contact" className="btn btn-primary">Get Quote</a>
                    </div>
                    <div className="service-detail-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-us">
              <h2>Why Choose PowerPro Electric?</h2>
              <div className="why-choose-grid">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="why-choose-card">
                    <FontAwesomeIcon icon={reason.icon} className="why-choose-icon" />
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="services-cta-section">
              <div className="cta-content">
                <h2>Ready to Get Started?</h2>
                <p>
                  Contact us today for a free consultation and estimate. 
                  Our team is ready to help with all your electrical needs.
                </p>
                <div className="cta-buttons">
                  <a href="tel:+1234567890" className="btn btn-primary">
                    <FontAwesomeIcon icon={faPhone} />
                    Call Now
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;