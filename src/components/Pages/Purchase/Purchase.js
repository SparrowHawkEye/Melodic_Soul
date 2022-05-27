import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useProductDetails from "../../../hooks/useProductDetails";
import Footer from "../../Shared/Footer/Footer";

const Purchase = () => {
  const { itemId } = useParams();
  const [product] = useProductDetails(itemId);
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
  const [purchaseAmount, setPurchaseAmount] = useState("");

  const SubmitButton = () => {
    if (
      minimumQuantity > purchaseAmount ||
      availableQuantity < purchaseAmount
    ) {
      return (
        <>
          {purchaseAmount && (
            <p className="text-red-500 text-sm">
              {" "}
              Please insert a value more than {minimumQuantity} and less then{" "}
              {availableQuantity}{" "}
            </p>
          )}
          <input
            type="submit"
            value="Purchase"
            class="btn btn-primary text-base-100"
            disabled
          />
        </>
      );
    } else {
      return (
        <input
          type="submit"
          value="Purchase"
          class="btn btn-primary text-base-100"
        />
      );
    }
  };

  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    const phoneNo = e.target.phone.value;
    const purchaseAmount = e.target.amount.value;
    console.log("hello from purchase", phoneNo, purchaseAmount);
  };
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
          <form onSubmit={handlePurchaseSubmit} class="card-body">
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
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone No.</span>
              </label>
              <input
                type="tel"
                placeholder="+123-456-7890"
                name="phone"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Purchase Amount</span>
              </label>
              <input
                onChange={(e) => setPurchaseAmount(e.target.value)}
                type="number"
                placeholder="Purchase Amount"
                name="amount"
                class="input input-bordered"
              />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
