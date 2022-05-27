import React from "react";

const Blog5 = () => {
  return (
    <div
      tabIndex="0"
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-sm mb-3"
    >
      <div className="collapse-title text-xl font-medium">
        5. You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </div>
      <div className="collapse-content">
        <p>
          <span className="text-xl font-bold block my-1">
            Using the Find Method:
          </span>
          The Array.find() method takes a callback function as parameter and
          executes that function once for each element present in the array,
          until it finds one where the function returns a true value. If the
          element is found it returns the value of the element, otherwise
          undefined is returned.
        </p>
        <p>
          <span className="text-xl font-bold block my-1">
            Using For a loop:
          </span>
          We can iterate through the array using a for loop until the required item is found.
        </p>
      </div>
    </div>
  );
};

export default Blog5;
