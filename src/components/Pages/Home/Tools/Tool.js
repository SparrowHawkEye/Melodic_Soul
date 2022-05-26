import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  
  const navigate = useNavigate();
  const navigateToToolDetails = (id) => {
    navigate(`/purchase/${id}`);
  };
  /* const { name, description, img, minimumQuantity, availableQuantity, price } =
    tool; */
  const { _id, name, img } = tool;
  return (
    <div className="card card-side bg-base-100 shadow-xl rounded-md">
      <figure className="effect-dexter">
        <img src={img} className="" alt="img19" />
        <figcaption>
          <p>{name}</p>
          <a onClick={() => navigateToToolDetails(_id)}></a>
        </figcaption>
      </figure>
    </div>
  );
};

export default Tool;
