import { toast } from 'react-toastify';

const SingleUser = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://secret-temple-83800.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
    <th> {index + 1} </th> <td> {email} </td>
    <td>
      {role !== "admin" && (
        <button onClick={makeAdmin} className="btn btn-xs">
          Make Admin
        </button>
      )}
    </td>
    <td>
      <button className="btn btn-xs"> Remove Admin </button>
    </td>
  </tr>
  );
};

export default SingleUser;