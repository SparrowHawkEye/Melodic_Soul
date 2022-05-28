import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      {user && (
        <>
          {/*   <li>
            <Link to="/purchase">Purchase</Link>
          </li> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/myportfolio">My Portfolio</Link>
      </li>
    </>
  );

  const userMenu = (
    <>
      {user && (
        <>
          <li>
            <p className="justify-between">{user.displayName}</p>
          </li>
          <li>
            <p>{user.email}</p>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                signOut(auth);
                localStorage.removeItem('accessToken');
              }}
            >
              Sign Out
            </Link>
          </li>
        </>
      )}
      {!user && (
        <li>
          <Link to="/login">Log In</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-lime-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {menuItems}
          </ul>
        </div>
        <lord-icon
          src={
            user?.photoURL
              ? user.photoURL
              : "https://cdn.lordicon.com/vnxmkidq.json"
          }
          trigger="loop"
          delay="20"
          colors="primary:#84B442,secondary:#5B772E"
          style={{ width: "65px", height: "65px" }}
        ></lord-icon>
        <Link
          to="/"
          className="btn btn-link hover:no-underline normal-case text-xl"
        >
          Melodic Soul
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {userMenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
