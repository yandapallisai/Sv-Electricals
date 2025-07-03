import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faPaperPlane,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Service Only' }
  ];

  const services = [
    'Residential Wiring',
    'Commercial Electrical',
    'Lighting Installation',
    'Panel Upgrades',
    'Electrical Repairs',
    'Safety Inspections',
    'Emergency Services',
    'Other'
  ];

  const emergencyPhone = "9705072945";
  const emergencyEmail = "yandapallivasu225@gmail.com";
  const businessAddress = `Door num vishakapatnam akkayyapalem Ramchandhra nagar 44-38-12/16`;
  const googleMapsEmbed = "https://www.google.com/maps?q=44-38-12/16+Ramchandhra+Nagar,+Akkayyapalem,+Visakhapatnam&output=embed";

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with us for all your electrical needs. We're here to help!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            
            {isSubmitted ? (
              <div className="success-message">
                <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell us about your electrical needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href={`tel:${emergencyPhone}`}>{emergencyPhone}</a>
                  <p>24/7 Emergency Service</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href={`mailto:${emergencyEmail}`}>{emergencyEmail}</a>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>{businessAddress}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                <div className="contact-details">
                  <h3>Business Hours</h3>
                  <div className="business-hours">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="hours-row">
                        <span className="day">{schedule.day}</span>
                        <span className="hours">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="emergency-contact">
              <h3>Emergency Service</h3>
              <p>For electrical emergencies, call us immediately:</p>
              <a href={`tel:${emergencyPhone}`} className="btn btn-primary emergency-btn">
                <FontAwesomeIcon icon={faPhone} />
                Emergency: {emergencyPhone}
              </a>
              <p>Or email: <a href={`mailto:${emergencyEmail}`}>{emergencyEmail}</a></p>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PowerPro Electric Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;