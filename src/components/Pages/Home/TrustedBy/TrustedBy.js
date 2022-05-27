import React from "react";
import arbovirus from "../../../../assets/band_logo/1.png";
import minarva from "../../../../assets/band_logo/2.png";
import nemesis from "../../../../assets/band_logo/3.png";
import shironamhin from "../../../../assets/band_logo/4.png";
import warfaze from "../../../../assets/band_logo/5.png";
import "./TrustedBy.css";

const TrustedBy = () => {
  return (
    <section className="section-featured mb-20">
      <div className="container ">
        <h2 className="text-2xl font-bold text-center text-primary">Group</h2>
        <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">
          Who Trusted Us
        </h2>
        <div className="logos flex flex-col gap-3 md:justify-center items-center md:flex-row flex-wrap xl:flex-nowrap">
          <img
            className="w-[60%] md:w-[30%]"
            src={minarva}
            alt="Minerva Logo"
          />
          <img
            className="w-[60%] md:w-[30%]"
            src={arbovirus}
            alt="Arbovirus Logo"
          />
          <img
            className="w-[60%] md:w-[30%]"
            src={nemesis}
            alt="Nemesis Logo"
          />
          <img
            className="w-[60%] md:w-[30%]"
            src={shironamhin}
            alt="Shironamhin Logo"
          />
          <img
            className="w-[60%] md:w-[30%]"
            src={warfaze}
            alt="Warfaze Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
