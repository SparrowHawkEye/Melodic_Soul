import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useProductDetails from "../../../hooks/useProductDetails";
import Footer from "../../Shared/Footer/Footer";

const Purchase = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useProductDetails(itemId);
  const [user] = useAuthState(auth);
  const {
    _id,
    img,
    name,
    description,
    minimumQuantity,
    availableQuantity,
    price,
  } = product;
  console.log(user);
  return (
    <>
      <div class="hero-content flex-col justify-around lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <div class="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src={img} alt={name} />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-primary text-2xl">{name}</h2>
              <p className="text-sm my-4">{description}</p>
              <p>
                <span className="text-success font-semibold text-lg">
                  Minimum Quantity:
                </span>
                <span className="text-primary ml-4 text-xl">
                  {minimumQuantity}
                </span>
              </p>
              <p>
                <span className="text-success font-semibold text-lg">
                  Available Quantity:
                </span>
                <span className="text-primary ml-4 text-xl">
                  {availableQuantity}
                </span>
              </p>
              <p>
                <span className="text-success font-semibold text-lg">
                  Price:
                </span>
                <span className="text-sm ml-4">$</span>
                <span className="text-primary text-xl">{price}</span>
              </p>
            </div>
          </div>
        </div>
        {/* User Input to purchase  */}
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                // placeholder="email"
                class="input input-bordered"
                value={user.email}
                disabled
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                // placeholder="email"
                class="input input-bordered"
                value={user.displayName}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
