import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  const navigate = useNavigate();
  const navigateToToolDetails = (id) => {
    navigate(`/purchase/${id}`);
  };
  const { name, description, img, price, _id } = tool;

  return (
    <div class="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-primary">{name}</h2>
        <p>{description.slice(0, 100)}....</p>
        <h2 class="card-title gap-0">
          Price:<span className="text-sm ml-2">$</span>
          <span className="text-primary">{price}</span>
        </h2>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            onClick={() => navigateToToolDetails(_id)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
