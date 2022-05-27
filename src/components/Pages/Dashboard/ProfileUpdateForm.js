import React from "react";

const ProfileUpdateForm = () => {
  const handleSubmit= (e) =>{
    e.preventDefault()
    const phoneNo = e.target.number.value;
    const date = e.target.date.value;
    const faceURL = e.target.facebook.value
    const twitterURL = e.target.twitter.value
    const linkedinURL = e.target.linkedin.value
    const githubURL = e.target.github.value
    console.log(phoneNo,date,faceURL,twitterURL,linkedinURL,githubURL);

  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
     {/*  <label className="label">
        <span className="label-text">What is your name?</span>
      </label> */}
      <input
        type="number"
        name="number"
        placeholder="Your Phone No."
        required
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <input
        type="date"
        name="date"
        placeholder="Your Birthday"
        required
        className="input input-bordered w-full max-w-xs mb-3"
      />

      <input
        type="url"
        name="facebook"
        placeholder="Your Facebook Link"
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <input
        type="url"
        name="twitter"
        placeholder="Your Twitter Link"
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <input
        type="url"
        name="linkedin"
        placeholder="Your LinkedIn Link"
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <input
        type="url"
        name="github"
        placeholder="Your Github Link"
        className="input input-bordered w-full max-w-xs mb-3"
      />

      <select className="select select-bordered w-full max-w-xs mb-3">
        <option disabled selected >
          Select Your Gender
        </option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <br />
      <input className="btn btn-success" type="submit" value="Update" />
    </form>
  );
};

export default ProfileUpdateForm;