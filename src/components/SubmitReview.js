import React, { useState } from 'react';
import './Testimonials.css';

function renderStars(rating, setRating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`star ${i <= rating ? 'filled' : ''} clickable`}
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill={i <= rating ? '#f97316' : 'none'}
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => setRating(i)}
        style={{ cursor: 'pointer' }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  return stars;
}

const SubmitReview = ({ averageRating = 4.8, totalReviews = 75 }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the review to your backend or service
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setRating(0);
      setReview('');
      setSubmitted(false);
    }, 3500);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Leave a Review</h2>
          <div className="overall-rating">
            <span className="average-rating">{averageRating} out of 5</span>
            <span className="stars">{renderStars(Math.round(averageRating), () => {})}</span>
            <span className="total-reviews">Based on {totalReviews} reviews</span>
          </div>
        </div>
        <div className="submit-review-form-wrapper">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your feedback!</h3>
              <p>Your review has been submitted and will appear soon.</p>
            </div>
          ) : (
            <form className="submit-review-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. John D."
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your Rating</label>
                <div className="star-input">
                  {renderStars(rating, setRating)}
                </div>
                {rating === 0 && <div className="form-error">Please select a rating.</div>}
              </div>
              <div className="form-group">
                <label htmlFor="review" className="form-label">Your Review</label>
                <textarea
                  id="review"
                  className="form-textarea"
                  value={review}
                  onChange={e => setReview(e.target.value)}
                  placeholder="Share your experience..."
                  required
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn" disabled={rating === 0}>
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubmitReview; 