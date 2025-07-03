import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, 
  faShieldAlt, 
  faClock, 
  faCheckCircle,
  faCertificate,
  faTools,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css';

const AboutUs = ({ fullPage = false }) => {
  const teamMembers = [
    {
      name: "Vasu",
      role: "Master Electrician & Owner",
      experience: "5+ years",
      phone: "9705072945",
      email: "yandapallivasu225@gmail.com",
      image: require('../Assets/Vasu.jpg')
    },
    {
      name: "Satish",
      role: "Senior Electrician",
      experience: "5+ years",
      phone: "630423034",
      email: "mulagapakasatish159@gmail.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const certifications = [
    { name: "Licensed Master Electrician", icon: faCertificate },
    { name: "OSHA Safety Certified", icon: faShieldAlt },
    { name: "NEC Code Compliant", icon: faCheckCircle },
    { name: "Bonded & Insured", icon: faAward }
  ];

  const values = [
    { title: "Safety First", description: "Your safety is our top priority in every project", icon: faShieldAlt },
    { title: "Quality Work", description: "We never compromise on the quality of our electrical work", icon: faTools },
    { title: "Customer Focus", description: "Your satisfaction is what drives us to excel", icon: faHeart },
    { title: "Reliability", description: "Count on us to be there when you need us most", icon: faClock }
  ];

  return (
    <section className={`about-us ${fullPage ? 'full-page' : ''}`}>
      <div className="container">
        {/* Company Story Section */}
        <div className="about-story">
          <div className="about-content">
            <div className="about-text">
              <h2>About SV Electricals</h2>
              <p className="about-subtitle">
                Serving our community with excellence since 2010
              </p>
              <p>
                SV Electricals was founded with a simple mission: to provide reliable, 
                safe, and professional electrical services to homes and businesses in our community. 
                What started as a small family business has grown into one of the most trusted 
                electrical contractors in the region.
              </p>
              <p>
                Our team of licensed and certified electricians brings decades of combined 
                experience to every project. We understand that electrical work isn't just 
                about wires and circuits—it's about keeping your family safe, your business 
                running smoothly, and your property protected.
              </p>
              <p>
                We take pride in our commitment to safety, quality, and customer satisfaction. 
                Every job we complete is backed by our 100% satisfaction guarantee, because 
                we believe that trust is earned through consistent, excellent service.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Professional electrician at work" 
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2 className="text-center">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <FontAwesomeIcon icon={value.icon} className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="text-center">Meet Our Team</h2>
          <p className="text-center team-subtitle">
            Experienced professionals dedicated to your electrical needs
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-experience">{member.experience} experience</p>
                  <p className="team-contact">
                    <span>Phone: <a href={`tel:${member.phone}`}>{member.phone}</a></span><br />
                    <span>Email: <a href={`mailto:${member.email}`}>{member.email}</a></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h2 className="text-center">Our Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <FontAwesomeIcon icon={cert.icon} className="certification-icon" />
                <h3>{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Emergency Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;