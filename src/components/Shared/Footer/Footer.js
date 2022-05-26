import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content" >
      <div className="footer p-10 grid-cols-2 lg:grid-cols-3">
        <div>
          <Link
            to="/"
            className="btn btn-link hover:no-underline normal-case text-xl"
          >
            <lord-icon
              src="https://cdn.lordicon.com/vnxmkidq.json"
              trigger="loop"
              delay="20"
              colors="primary:#84B442,secondary:#5B772E"
              style={{ width: "65px", height: "65px" }}
            ></lord-icon>
          </Link>
          <p className="mt-3">
            Melodic Soul Inc.
            <br />
            Providing Musical Solution Since 2009
          </p>
        </div>
        {/* <div>
        <span className="footer-title">Services</span>
        <a href='/' className="link link-hover">Branding</a>
        <a href='/' className="link link-hover">Design</a>
        <a href='/' className="link link-hover">Marketing</a>
        <a href='/' className="link link-hover">Advertisement</a>
      </div> */}
        <div>
          <span className="footer-title">Company</span>
          <a href='/' className="link link-hover">About us</a>
          <a href='/' className="link link-hover">Contact</a>
          <a href='/' className="link link-hover">Jobs</a>
          <a href='/' className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href='/' className="link link-hover">Terms of use</a>
          <a href='/' className="link link-hover">Privacy policy</a>
          <a href='/' className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022
        <Link to="/" className="hover:underline hover:text-green-400 ml-1">
          Bookie House
        </Link>
        <small className="mx-1">
          by Maksud aka
          <a
            href="https://github.com/SparrowHawkEye"
            className="hover:underline ml-1 hover:text-green-400"
          >
            SparrowHawkEye.
          </a>
        </small>
        All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
