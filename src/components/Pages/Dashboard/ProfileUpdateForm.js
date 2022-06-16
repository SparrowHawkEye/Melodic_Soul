import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
const ProfileUpdateForm = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const { isLoading, refetch } = useQuery();

  const onSubmit = (e) => {
    //  e.preventDefault();
    /* const phoneNo = e.target.number.value;
    const date = e.target.date.value;
    const faceURL = e.target.facebook.value;
    const twitterURL = e.target.twitter.value;
    const linkedinURL = e.target.linkedin.value;
    const githubURL = e.target.github.value;
    console.log(phoneNo, date, faceURL, twitterURL, linkedinURL, githubURL); */

    fetch(`https://secret-temple-83800.herokuapp.com/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          console.log(result);
          reset();
          refetch();
          toast.success("Successfully updated your profile!");
        }
      });
    console.log("data");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <input
        type="tel"
        name="number"
        placeholder="Your Phone No."
        {...register("number", { required: true })}
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <input
        type="name"
        name="name"
        placeholder="Your Name"
        {...register("name", { required: true })}
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <input
        type="date"
        name="date"
        placeholder="Your Birthday"
        {...register("date", { required: true })}
    required
        className="input input-bordered w-full max-w-xs mb-3"
      />

      <input
        type="url"
        name="facebook"
        placeholder="Your Facebook Link" required
        {...register("facebook", { required: true })}
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <input
        type="url"
        name="twitter"
        placeholder="Your Twitter Link"
        className="input input-bordered w-full max-w-xs mb-3"
        {...register("twitter")}
      />
      <input
        type="url"
        name="linkedin"
        placeholder="Your LinkedIn Link"
        className="input input-bordered w-full max-w-xs mb-3"
        {...register("linkedin")}
      />
      <input
        type="url"
        name="github"
        placeholder="Your Github Link"
        className="input input-bordered w-full max-w-xs mb-3"
        {...register("github")}
      />
      <input
        type="url"
        name="imgLink"
        placeholder="Your Image"
        {...register("imgLink")}
        className="input input-bordered w-full max-w-xs mb-3"
      />
      <textarea
        type="textarea"
        name="address"
        placeholder="Your Address"
        {...register("address", { required: true })} required
        className="input input-bordered w-full max-w-xs mb-3"
      />

      {/* <select className="select select-bordered w-full max-w-xs mb-3">
        <option disabled defaultValue>
          Select Your Gender
        </option>
        <option>Male</option>
        <option>Female</option>
      </select> */}
      <br />
      <input
        className="btn btn-primary text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-primary focus:outline-none focus:shadow-outline focus:bg-white focus:text-primary hover:shadow-xs px-8"
        type="submit"
        value="Update"
      />
    </form>
  );
};

export default ProfileUpdateForm;
