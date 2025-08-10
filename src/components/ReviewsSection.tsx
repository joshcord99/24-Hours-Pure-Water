import React, { useState, useEffect } from "react";
import "./ReviewsSection.css";

import yelpReviewsData from "../../reviews/yelp_reviews.json";

interface YelpReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  yelp_url: string;
}

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<YelpReview[]>([]);
  const [businessInfo, setBusinessInfo] = useState<any>(null);

  useEffect(() => {

    if (yelpReviewsData.reviews) {
      const transformedReviews = yelpReviewsData.reviews.map(
        (review, index) => ({
          ...review,
          id: review.id || `yelp-${index}`,
        })
      );
      setReviews(transformedReviews);
    }

    if (yelpReviewsData.business_info) {
      setBusinessInfo(yelpReviewsData.business_info);
    }
  }, []);

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  
  const displayedReviews = reviews.slice(0, 6);

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>

        {businessInfo && (
          <div className="business-rating-summary">
            <div className="rating-info">
              <span className="overall-rating">
                {renderStars(Math.round(businessInfo.rating))}
              </span>
              <span className="rating-text">
                {businessInfo.rating} out of 5 stars
              </span>
              <span className="review-count">
                Based on {businessInfo.review_count} reviews
              </span>
            </div>
          </div>
        )}

        <div className="reviews-grid">
          {displayedReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <div className="review-date">{formatDate(review.date)}</div>
                  {review.verified && (
                    <div className="verified-badge">✓ Verified Review</div>
                  )}
                </div>
                <div className="review-rating">
                  <span className="stars">{renderStars(review.rating)}</span>
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a href="/reviews" className="btn btn-primary">
            Read All {businessInfo?.review_count || 46} Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
