import React from "react";
import CountUp from "react-countup";
// import GiSellCard from 'react-icons/md'
const BusinessSummary = () => {
  return (
    <div className="bg-gray-50 mb-20 p-8">
      <h2 className="text-2xl font-bold text-center text-primary">
        Our
      </h2>
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">Business Summary</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center ">
        <div className="stats shadow w-52">
          <div className="stat">
          {/* <GiSellCard></GiSellCard> */}
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">
              <CountUp end={89400}></CountUp>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow w-52">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">
              <CountUp end={89400}></CountUp>
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow w-52">
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
