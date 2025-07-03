import React from 'react';
import './Testimonials.css';

const totalReviews = 75;
const averageRating = 4.8;

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`star ${i <= rating ? 'filled' : ''}`}
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={i <= rating ? '#f97316' : 'none'}
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  return stars;
}

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Customer Reviews</h2>
          <div className="overall-rating">
            <span className="average-rating">{averageRating} out of 5</span>
            <span className="stars">{renderStars(Math.round(averageRating))}</span>
            <span className="total-reviews">Based on {totalReviews} reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 