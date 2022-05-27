import React from "react";
import heroImage from "../../../../assets/hero_images/photo-1462965326201-d02e4f455804.png";
const Banner = () => {
  return (
    <div
      className="hero min-h-[45vh] rounded-lg overflow-hidden mb-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Melodic Soul
            <lord-icon
              src="https://cdn.lordicon.com/vkweisbr.json"
              trigger="loop"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
          </h1>
          <p className="mb-5 text-2xl">
            “Life is for the living. Death is for the dead. Let life be like
            music. And death a note unsaid.”
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
