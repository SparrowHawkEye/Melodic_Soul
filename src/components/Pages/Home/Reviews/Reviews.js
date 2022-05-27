import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="bg-gray-50 mb-20 p-8">
      <h2 className="text-2xl font-bold text-center text-primary">Our</h2>
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">
        Client Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
