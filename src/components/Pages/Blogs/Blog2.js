import React from "react";

const Blog2 = () => {
  return (
    <div
      tabIndex="0"
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-sm mb-3"
    >
      <div className="collapse-title text-xl font-medium">
        2. What are the different ways to manage a state in a React application?
      </div>
      <div className="collapse-content">
        <p>
        There are four main types of state you need to properly manage in your React apps:
        </p>
        <ul className="list-decimal m-8">
          <li className="mb-4">
           Local State: 
          </li>
          <li className="mb-4">
           Global State
          </li>
          <li className="mb-4">
           Server State
          </li>
          <li className="mb-4">
           URL State
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Blog2;
