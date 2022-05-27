import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const { displayName, email } = user;
  return (
    <div>
      <div className="drawer-content flex flex-col items-center justify-center">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
              <h2 className="mb-3 card-title">Please Add a review</h2>
              <form className="w-full">
                <div className="mb-3">
                  <input
                    type="name"
                    className="input input-bordered w-full max-w-xs"
                    name="name"
                    value={displayName}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="input input-bordered w-full max-w-xs"
                    name="email"
                    value={email}
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    placeholder="Your Comment"
                    className="textarea textarea-bordered w-full max-w-xs"
                    name="comment"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="1 ~ 5"
                    className="input input-bordered w-full max-w-xs"
                    name="rating"
                  />
                </div>
                <div className="mb-3 card-actions">
                  <button type="submit" className="btn btn-primary w-full">
                    Add Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
    </div>
  );
};

export default AddReview;
