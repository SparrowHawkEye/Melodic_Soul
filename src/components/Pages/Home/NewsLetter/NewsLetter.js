import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-gray-50 mb-20 p-8">
      <h2 className="text-2xl font-bold text-center text-primary">Want to </h2>
      <h2 className="text-3xl font-bold text-center text-gray-400 mb-6">
        Hear From Us
      </h2>
      <div className="hero">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Subscribe our Newsletter!</h1>
            <p className="py-6">
              Want to get Offers First? We'll send offers and discount updates
              to your mail!
            </p>
          </div>
          <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <div className="input-group ">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    className="input input-primary outline-none "
                  />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
