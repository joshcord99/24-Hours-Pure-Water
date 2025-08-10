import React from "react";
import YelpReviews from "../components/YelpReviews";
import "./Reviews.css";

const Reviews: React.FC = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <div className="container">
          <h1 className="reviews-title">Customer Reviews</h1>
          <p className="reviews-subtitle">
            See what our customers are saying about our water quality and
            service on Yelp.
          </p>
        </div>
      </div>

      <div className="reviews-content">
        <div className="container">
          <YelpReviews />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
