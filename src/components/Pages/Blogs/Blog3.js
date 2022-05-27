import React from "react";

const Blog3 = () => {
  return (
    <div
      tabIndex="0"
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-sm mb-3"
    >
      <div className="collapse-title text-xl font-medium">
        3. How does Prototypical Inheritance work?
      </div>
      <div className="collapse-content">
        <p>
          Prototypical Inheritance is a method by which an object can inherit
          the properties and methods of another object. The prototype is
          responsible for storing and giving access to a common set of methods
          and properties shared among all instances of the class or constructor
          to which the prototype is configured. JavaScript is a prototype-based
          language, meaning object properties and methods can be shared through
          generalized objects that have the ability to be cloned and extended.
          Each object has a private property (referred to as its [[Prototype]])
          that maintains a link to another object called its prototype. That
          prototype object has its own prototype, and so on until an object
          whose prototype is null is reached. By definition, null has no
          prototype, and acts as the final link in this chain of prototypes.
          This is known as prototypical inheritance and differs from class
          inheritance. Among popular object-oriented programming languages,
          JavaScript is relatively unique, as other prominent languages such as
          PHP, Python, and Java are class-based languages, which instead define
          classes as blueprints for objects.
        </p>
      </div>
    </div>
  );
};

export default Blog3;
