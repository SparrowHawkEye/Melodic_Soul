import React from "react";

const Blog4 = () => {
  return (
    <div
      tabIndex="0"
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-sm mb-3"
    >
      <div className="collapse-title text-xl font-medium">
        4. What is a unit test? Why should write unit tests?
      </div>
      <div className="collapse-content">
        <p>
          {" "}
          <span className="text-xl font-bold block my-1">What:</span>
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended.
        </p>
        <p>
          <span className="text-xl font-bold block my-2">Why:</span>
          Unit testing ensures that all code meets quality standards before it’s
          deployed. This ensures a reliable engineering environment where
          quality is paramount. Over the course of the product development life
          cycle, unit testing saves time and money, and helps developers write
          better code, more efficiently.
        </p>
      </div>
    </div>
  );
};

export default Blog4;
