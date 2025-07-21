import React, { useState } from 'react';
import styles from './review.module.css';
import { FaStar, FaUser } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([

  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
    hover: 0
  });

  // Fetch existing reviews on component mount

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/reviews');
        setReviews(res.data);
        
      } catch (error) {
        console.error('Error  fetching reviews : ', error);        
      }
    }
    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleStarHover = (hover) => {
    setNewReview({ ...newReview, hover });
  };

  const handleMouseLeave = () => {
    setNewReview({ ...newReview, hover: 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name.trim() === '' || newReview.rating === 0 || newReview.comment.trim() === '') {
      alert('Please fill all fields and select a rating');
      return;
    }

    const review = {
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/reviews`, review);

      setReviews([res.data, ...reviews]);
      setNewReview({ name: '', rating: 0, comment: '', hover: 0 }); // Clear form
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review');
    }

   
  };

  return (
    <div className={styles.reviewContainer}>
      <h2 className={styles.title}>Customer Reviews</h2>
      
      {/* Review Form */}
      <div className={styles.reviewForm}>
        <h3>Write a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Your Rating</label>
            <div className={styles.starRating}>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setNewReview(prev => ({ ...prev, rating: ratingValue }))}
                    />
                    <FaStar
                      className={styles.star}
                      color={ratingValue <= (newReview.hover || newReview.rating) ? "#ffc107" : "#e4e5e9"}
                      size={25}
                      onMouseEnter={() => setNewReview(prev => ({ ...prev, hover: ratingValue }))}
                      onMouseLeave={() => setNewReview(prev => ({ ...prev, hover: 0 }))}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comment">Your Review</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              placeholder="Share your experience..."
              rows="4"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>Submit Review</button>
        </form>
      </div>

      {/* Reviews List */}
      <div className={styles.reviewsList}>
        {reviews.map(review => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={styles.userIcon}>
                <FaUser size={20} />
              </div>
              <div>
                <h4>{review.name}</h4>
                <div className={styles.reviewMeta}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        color={i < review.rating ? "#ffc107" : "#e4e5e9"}
                        size={15}
                      />
                    ))}
                  </div>
                  <span className={styles.date}>{review.date}</span>
                </div>
              </div>
            </div>
            <p className={styles.reviewText}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;