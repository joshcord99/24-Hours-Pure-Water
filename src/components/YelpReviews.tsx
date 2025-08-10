import React, { useState, useEffect } from "react";
import "./YelpReviews.css";

// Import the Yelp reviews data
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

interface BusinessInfo {
  name: string;
  rating: number;
  review_count: number;
  address: string | null;
  phone: string;
  url: string;
}

interface YelpData {
  business_info: BusinessInfo;
  reviews: YelpReview[];
  fetched_at: string;
}

const YelpReviews: React.FC = () => {
  const [yelpData, setYelpData] = useState<YelpData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  useEffect(() => {
    // Load Yelp reviews from the imported JSON data
    const loadYelpReviews = () => {
      try {
        // Transform the data to match our interface
        const transformedData: YelpData = {
          business_info: yelpReviewsData.business_info,
          reviews: yelpReviewsData.reviews.map((review, index) => ({
            ...review,
            id: review.id || `yelp-${index}`, // Generate ID if not provided
          })),
          fetched_at: yelpReviewsData.fetched_at,
        };
        setYelpData(transformedData);
      } catch (err) {
        setError(
          "Unable to load Yelp reviews. Please ensure the Python script has been run."
        );
      } finally {
        setLoading(false);
      }
    };

    loadYelpReviews();
  }, []);

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const filteredReviews = yelpData?.reviews
    ? selectedRating
      ? yelpData.reviews.filter((review) => review.rating === selectedRating)
      : yelpData.reviews
    : [];

  const averageRating = yelpData?.reviews
    ? yelpData.reviews.reduce((acc, review) => acc + review.rating, 0) /
      yelpData.reviews.length
    : 0;

  if (loading) {
    return (
      <div className="yelp-loading">
        <div className="loading-spinner"></div>
        <p>Loading Yelp reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="yelp-error">
        <h3>Yelp Reviews</h3>
        <p>{error}</p>
        <div className="yelp-setup-instructions">
          <h4>To get Yelp reviews:</h4>
          <ol>
            <li>
              Get a Yelp API key from{" "}
              <a
                href="https://www.yelp.com/developers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yelp Developers
              </a>
            </li>
            <li>
              Edit the <code>yelp_reviews.py</code> file and add your API key
            </li>
            <li>
              Run: <code>python yelp_reviews.py</code>
            </li>
            <li>
              Copy the generated <code>yelp_reviews.json</code> to your public
              folder
            </li>
          </ol>
        </div>
        <div className="yelp-link">
          <a
            href="https://www.yelp.com/biz/24-hours-pure-water-gardena-2"
            target="_blank"
            rel="noopener noreferrer"
            className="yelp-button"
          >
            View on Yelp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="yelp-reviews">
      <div className="yelp-header">
        <h3>Yelp Reviews</h3>
        {yelpData?.business_info && (
          <div className="business-summary">
            <div className="business-rating">
              <span className="rating-number">
                {yelpData.business_info.rating}
              </span>
              <span className="rating-stars">
                {renderStars(yelpData.business_info.rating)}
              </span>
              <span className="review-count">
                ({yelpData.business_info.review_count} reviews)
              </span>
            </div>
            <a
              href={yelpData.business_info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="yelp-link-button"
            >
              View on Yelp
            </a>
          </div>
        )}
      </div>

      <div className="reviews-filters">
        <h4>Filter by Rating:</h4>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${selectedRating === null ? "active" : ""}`}
            onClick={() => setSelectedRating(null)}
          >
            All Reviews
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className={`filter-btn ${
                selectedRating === rating ? "active" : ""
              }`}
              onClick={() => setSelectedRating(rating)}
            >
              {rating} Star{rating !== 1 ? "s" : ""}
            </button>
          ))}
        </div>
      </div>

      <div className="reviews-grid">
        {filteredReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <h4 className="reviewer-name">{review.name}</h4>
                <div className="review-meta">
                  <span className="review-date">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                  {review.verified && (
                    <span className="verified-badge">
                      ✓ Verified Yelp Review
                    </span>
                  )}
                </div>
              </div>
              <div className="review-rating">
                <span className="stars">{renderStars(review.rating)}</span>
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
            <a
              href={review.yelp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="review-link"
            >
              View on Yelp →
            </a>
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="no-reviews">
          <p>No reviews found for the selected rating.</p>
        </div>
      )}
    </div>
  );
};

export default YelpReviews;
