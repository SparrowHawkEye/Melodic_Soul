import React from "react";
import heroImage from "../../../../assets/hero_images/photo-1462965326201-d02e4f455804.png";
const Banner = () => {
  return (
    <div
      className="hero min-h-[45vh] rounded-lg overflow-hidden mb-20"
      style={{"backgroundImage": `url(${heroImage})`}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
