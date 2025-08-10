import React from "react";
import PricingCards from "../components/PricingCards";
import OwnerSection from "../components/OwnerSection";
import BioSection from "../components/BioSection";
import ReviewsSection from "../components/ReviewsSection";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <PricingCards />
      <OwnerSection />
      <BioSection />
      <ReviewsSection />
    </div>
  );
};

export default Home;
