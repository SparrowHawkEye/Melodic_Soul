import React from "react";
import CountUp from "react-countup";
import { GiSellCard } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GoPackage } from "react-icons/go";
const BusinessSummary = () => {
  return (
    <div className="bg-gray-50 mb-20 p-8">
      <h2 className="text-2xl font-bold text-center text-primary">Our</h2>
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">
        Business Summary
      </h2>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap items-center justify-center ">
        <div className="stats shadow w-64">
          <div className="stat ">
            <div className="stat-title">Total Sells</div>
            <div className="flex gap-3 items-center">
              <GiSellCard size={"2rem"} color={"#84B342"}></GiSellCard>

              <div className="stat-value">
                <CountUp end={104000}></CountUp><span className="text-md">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="stats shadow w-64">
          <div className="stat ">
            <div className="stat-title">Total Customers</div>
            <div className="flex gap-3 items-center">
              <AiOutlineUsergroupAdd size={"2rem"} color={"#84B342"}></AiOutlineUsergroupAdd>

              <div className="stat-value">
                <CountUp end={9500}></CountUp><span className="text-md">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="stats shadow w-64">
          <div className="stat ">
            <div className="stat-title">Total Products</div>
            <div className="flex gap-3 items-center">
              <GoPackage size={"2rem"} color={"#84B342"}></GoPackage>

              <div className="stat-value">
                <CountUp end={10000}></CountUp><span className="text-md">+</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BusinessSummary;
