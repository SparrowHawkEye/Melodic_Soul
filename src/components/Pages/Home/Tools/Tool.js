import React from "react";
import { Link } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  const { name, description, img, minimumQuantity, availableQuantity, price } =
    tool;
  return (
    <div className="card card-side bg-base-100 shadow-xl rounded-md">
      <figure className="effect-dexter">
        <img src={img} className="" alt="img19" />
        <figcaption>
          <p>{name}</p>
          <Link to="/home"></Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default Tool;
