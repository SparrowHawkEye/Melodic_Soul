import React from "react";
import CountUp from "react-countup";
const BusinessSummary = () => {
  return (
    <div className="bg-base-200">
      <h2 className="text-3xl">Business Summary</h2>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center ">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">
              <CountUp end={89400}></CountUp>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
