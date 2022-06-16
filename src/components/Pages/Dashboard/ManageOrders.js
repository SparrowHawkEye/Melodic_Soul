import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";
// https://secret-temple-83800.herokuapp.com/
const ManageOrders = () => {
  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("https://secret-temple-83800.herokuapp.com/orders").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
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
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th> </th> <th> Product Name </th> <th> Email </th>
                <th> Price </th> <th> Order Quantity </th>
                <th>Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {allOrders?.map((order, index) => (
                <tr key={order._id} order={order} index={index}>
                  <th> {index + 1} </th> <td> {order.productName} </td>
                  <td> {order.email} </td> <td> {order.total} </td>
                  <td> {order.amount} </td>
                  <td>
                    <button
                      onClick={() => handleOrderDelete(order?._id)}
                      className="btn btn-xs btn-error px-8 text-white"
                    >
                      Delete
                    </button>
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

export default ManageOrders;
