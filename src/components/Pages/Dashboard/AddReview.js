import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { displayName, email, photoURL } = user;
  const { register, handleSubmit, reset } = useForm();
  const handleAddReview = (data) => {
    const url = `http://localhost:5000/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Done!", "Review added Successfully!", "success");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="drawer-content flex flex-col items-center justify-center">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
              <h2 className="mb-3 card-title">Please Add a review</h2>
              <form onSubmit={handleSubmit(handleAddReview)} className="w-full">
                <div className="mb-3">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    name="name"
                    value={displayName}
                    {...register("name")}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="url"
                    className="input input-bordered w-full max-w-xs"
                    name="img"
                    value={photoURL}
                    {...register("img")}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full max-w-xs"
                    name="email"
                    value={email}
                    {...register("email")}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    placeholder="Your Comment"
                    className="textarea textarea-bordered w-full max-w-xs"
                    name="description"
                    {...register("description")}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="label">
                    <span className="label-text">Ratings</span>
                  </label>
                  <input
                    type="number"
                    placeholder="1 ~ 5"
                    className="input input-bordered w-full max-w-xs"
                    name="rating"
                    {...register("rating", { min: 0, max: 5 })}
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
      </div>
    </div>
  );
};

export default AddReview;
