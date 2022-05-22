import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <lord-icon
        src="https://cdn.lordicon.com/rjzlnunf.json"
        trigger="loop"
        delay="10"
        colors="primary:#84B442,secondary:#5B772E"
        style={{ width: "90px", height: "90px" }}
      ></lord-icon>
    </div>
  );
};

export default Loading;
