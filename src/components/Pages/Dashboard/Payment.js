import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3OLAAIEhgBi7OuPF8sv7se6GY8wGSatuE36n1JQdhsCqBurvyBlW8fiCO8Zx5MxjX3h3vC0UTSoBrWs03zMOM7006Rn8kXGt"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://secret-temple-83800.herokuapp.com/orders/${id}`;
  const {
    data: order,
    isLoading,
    // refetch,
  } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        // "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  
  if (isLoading) {
    return <Loading />;
  }
  return (
   
    <div>
   <h2>  Please pay for:{id} </h2>
      <div className="md:ml-36">
        <div className="card md:w-96 bg-base-100 shadow-xl mt-6 ml-6">
          <div className="card-body">
            <h2 className="card-title"> {order?.productName} </h2>
            <div className="swap-off"> Hello {order?.displayName}😇 </div>
            <p className="font-bold"> Please pay for: {order?.total} </p>
          </div>
        </div>
        <div className="card md:w-96 bg-white text-primary-content ml-6 mt-4 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
