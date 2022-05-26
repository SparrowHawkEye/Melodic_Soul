import React from "react";
import arbovirus from "../../../../assets/band_logo/1.png";
import minarva from "../../../../assets/band_logo/2.png";
import nemesis from "../../../../assets/band_logo/3.png";
import shironamhin from "../../../../assets/band_logo/4.png";
import warfaze from "../../../../assets/band_logo/5.png";
import "./TrustedBy.css";

const TrustedBy = () => {
  return (
    <section className="section-featured my-5">
      <div className="container ">
        <h2 className="heading-feature-in text-3xl">We Are Trusted By</h2>
        <div className="logos ">
          <img src={minarva} alt="Minerva Logo" />
          <img src={arbovirus} alt="Arbovirus Logo" />
          <img src={nemesis} alt="Nemesis Logo" />
          <img src={shironamhin} alt="Shironamhin Logo" />
          <img src={warfaze} alt="Warfaze Logo" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
