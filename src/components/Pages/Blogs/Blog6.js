import React from "react";

const Blog6 = () => {
  return (
    <div
      tabIndex="0"
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-sm mb-3"
    >
      <div className="collapse-title text-xl font-medium">
        6. Why you do not set the state directly in React. For example, if you
        have `const [products, setProducts] = useState([])`. Why you do not set
        `products = [...]` instead, you use the `setProducts`
      </div>
      <div className="collapse-content">
        <p>
           When we directly set the state, it does not
          change <code>this.state</code> immediately. Instead, it creates a pending state
          transition, and accessing it after calling this method will only
          return the present value. For which we will lose control of the state across all
          components.
        </p>
      </div>
    </div>
  );
};

export default Blog6;
