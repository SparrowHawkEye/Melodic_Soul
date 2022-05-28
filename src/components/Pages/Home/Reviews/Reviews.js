import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-gray-50 mb-20 p-8">
      <h2 className="text-2xl font-bold text-center text-primary">Our</h2>
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">
        Client Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
        reviews.map((review,i)=><ReviewCard key={i} review={review}/>)
        }
      </div>
    </div>
  );
};

export default Reviews;
