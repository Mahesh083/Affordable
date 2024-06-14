import React, { useState } from 'react';
import './rating.css';

const RatingPage = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="rating-page">
      <h2>Rate this page</h2>
      <p>Please select a rating:</p>
      <div className="rating-options">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={() => handleRatingChange(value)}
            />
            <span className="rating-icon">&#9733;</span>
          </label>
        ))}
      </div>
      {rating > 0 && <p>You selected {rating} stars.</p>}
      <button className="reset-button" onClick={() => setRating(0)}>Reset</button>
    </div>
  );
};

export default RatingPage;
