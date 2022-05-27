import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://secret-temple-83800.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
  return (
    <div className="mb-20 p-8">
      <h2 className="text-2xl font-bold text-center text-primary">Products</h2>
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">
        In Our Inventory
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, i) => (
          <Tool tool={tool} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
