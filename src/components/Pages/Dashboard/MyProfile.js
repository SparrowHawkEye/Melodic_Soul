import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import auth from "../../../firebase.init";
import ProfileUpdateForm from "./ProfileUpdateForm";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateProfile, setUpdateProfile] = useState([]);
  const [reload, setReload] = useState(false);
  const { displayName, email } = user;

  useEffect(() => {
    fetch(`https://secret-temple-83800.herokuapp.com/users/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setReload(!reload);
        setUpdateProfile(result);
      });
    }, [user, reload, updateProfile]);
    const {
      name,
      imgLink: img,
      number: phoneNo,
      address,
      date: birthday,
      twitter: twitterURL,
      linkedin: linkURL,
      facebook: faceURL,
      github: gitURL,
    } = updateProfile;
    
    
  return (
    <div>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-primary">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">My Profile</span>
        </div>
        <div className="mx-auto rounded bg-primary p-1 w-28 ">
          <img
            className=""
            src={img ? img : `https://api.lorem.space/image/face?hash=33791`}
            alt=""
          />
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid  grid-cols-1 md:grid-cols-2">
              <div className="px-4 py-2 font-semibold">Name:</div>
              <div className="px-4 py-2">{name?name:displayName}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email:</div>
              <div className="px-4 py-2">
                <a className="text-primary" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 py-2 font-semibold">Phone No:</div>
              <div className="px-4 py-2">
                {phoneNo ? phoneNo : "Please Update Your Profile"}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 py-2 font-semibold">Address:</div>
              <div className="px-4 py-2">
                {address ? address : "Please Update Your Profile"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday:</div>
              <div className="px-4 py-2">
                {birthday ? birthday : "Please Update Your Profile"}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 py-2 font-semibold">Social Media:</div>
              <div className="px-4 py-2 flex space-x-3">
                <a
                  href={
                    faceURL ? faceURL : "https://www.facebook.com/ami1dukhi/"
                  }
                  target="_blank"
                  className="hover:text-primary text-lg"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={
                    twitterURL
                      ? twitterURL
                      : "https://twitter.com/SparrowHawk_Eye"
                  }
                  target="_blank"
                  className="hover:text-primary text-lg"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href={gitURL ? gitURL : "https://github.com/SparrowHawkEye"}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary text-lg"
                >
                  <FaGithub />
                </a>
                <a
                  href={
                    linkURL
                      ? linkURL
                      : "https://www.linkedin.com/in/maksudur-rahman-a9733a161/"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary text-lg"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <label
          htmlFor="update-modal"
          className="block md:w-[35%] btn btn-primary modal-button w-full text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-primary focus:outline-none focus:shadow-outline focus:bg-white hover:shadow-xs p-3 my-4"
        >
          Update Your Profile
        </label>
        <input type="checkbox" id="update-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="update-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h2 className="text-2xl font-semibold text-primary text-center mb-4">
              Update Your Profile
            </h2>
            <ProfileUpdateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
