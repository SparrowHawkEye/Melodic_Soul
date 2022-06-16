import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    fetch(`https://secret-temple-83800.herokuapp.com/myOrders?email=${email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading> </Loading>;
  }

  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://secret-temple-83800.herokuapp.com/orders/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              toast.success(`Order cancel successfully`);
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-3 mb-3">
        Your Orders: {myOrders?.length}
      </h1>
      <div>
        <div className="">
          <table className="table overflow-auto ">
            <thead>
              <tr>
                <th> Serial </th>
                <th> Name </th>
                <th> Order Quantity </th>
                <th> Total Cost </th>
                <th> PAYMENT </th>
                <th> Cancel Order </th>
              </tr>
            </thead>
            <tbody>
              {myOrders?.map((order, index) => (
                <tr key={order._id} order={order} index={index}>
                  <th> {index + 1} </th> <td> {order?.productName} </td>
                  <td> {order?.amount} </td>
                  <td> {order?.total} </td>
                  <td>
                    {order?.total && !order?.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-xs btn-primary text-white">
                          {" "}
                          PAY{" "}
                        </button>
                      </Link>
                    )}
                    {order?.total && order?.paid && (
                      <div>
                        <p>
                          <span className="text-red-500"> Paid </span>
                        </p>
                        <span className="text-red-500">
                          Transaction Id: {order.transactionId}
                        </span>
                      </div>
                    )}
                  </td>
                  <td>
                    {!order?.paid && (
                      <button
                        onClick={() => handleOrderDelete(order?._id)}
                        className="btn btn-xs btn-error px-8 text-white"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
