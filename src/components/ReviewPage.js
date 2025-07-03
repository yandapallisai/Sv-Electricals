import React, { useState } from 'react';
import './ReviewPage.css';

function getInitials(name) {
  if (!name) return 'AC';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(date) {
  return date.toLocaleDateString();
}

const initialReviews = [];

const ReviewPage = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  const averageRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    const initials = getInitials(name || 'Anonymous Customer');
    setReviews([
      {
        id: Date.now(),
        name: name || 'Anonymous Customer',
        initials,
        rating,
        comment,
        date: formatDate(new Date()),
      },
      ...reviews,
    ]);
    setName('');
    setRating(0);
    setHoverRating(0);
    setComment('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="review-container">
      <div className="feedback-card">
        <div className="feedback-header">
          <h2>Leave Your Feedback</h2>
          <p>Share your experience with us</p>
        </div>
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star${(hoverRating || rating) >= star ? ' active-fill' : ''}`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
              role="button"
              tabIndex={0}
              aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
        <form className="comment-box" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name (optional)</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. John D."
            className="form-input"
          />
          <label htmlFor="comment">Your comments (optional)</label>
          <textarea
            id="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="What did you like or dislike?"
            className="form-textarea"
          ></textarea>
          <button
            type="submit"
            className="submit-btn"
            disabled={rating === 0}
          >
            Submit Feedback
          </button>
        </form>
        {success && (
          <div className="success-message">
            Thank you for your feedback! We appreciate your time.
          </div>
        )}
      </div>
      <div className="ratings-display">
        <h3>Customer Feedback</h3>
        <div className="overall-rating-display">
          <span className="average-rating-display">
            {reviews.length ? `${averageRating} out of 5` : 'No ratings yet'}
          </span>
          <span className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star${averageRating >= star ? ' active-fill' : ''}`}
                style={{ fontSize: '1.5rem' }}
              >
                ★
              </span>
            ))}
          </span>
          <span className="total-reviews-display">
            {reviews.length ? `Based on ${reviews.length} review${reviews.length > 1 ? 's' : ''}` : ''}
          </span>
        </div>
        <div id="feedbackList">
          {reviews.length === 0 ? (
            <div className="no-feedback">
              <p>No feedback submitted yet. Be the first to review!</p>
            </div>
          ) : (
            reviews.map((feedback) => (
              <div className="feedback-item" key={feedback.id}>
                <div className="customer-info">
                  <div className="avatar">{feedback.initials}</div>
                  <div className="customer-name">{feedback.name}</div>
                  <div className="feedback-date">{feedback.date}</div>
                </div>
                <div className="feedback-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= feedback.rating ? 'filled-star' : ''}
                      style={{ fontSize: '1.25rem', marginRight: '0.25rem' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {feedback.comment && (
                  <div className="feedback-comment">{feedback.comment}</div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;