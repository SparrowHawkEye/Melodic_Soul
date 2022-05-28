import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import SingleUser from "./SingleUser";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://secret-temple-83800.herokuapp.com/users").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-6">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th> </th> <th> Name </th> <th> Make </th> <th> Remove </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <SingleUser
                key={user._id}
                user={user}
                refetch={refetch}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
