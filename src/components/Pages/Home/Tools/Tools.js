import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-4xl">Tools Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {
        tools.map((tool,i) => <Tool tool={tool} key={i}/> )
      }
      </div>
    </div>
  );
};

export default Tools;
