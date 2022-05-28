import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const [token] = useToken(user || gUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [ from, navigate, token]);

  if (loading || gLoading) {
    return <Loading />;
  } else if (error || gError) {
    signInErrorMessage = (
      <p className="text-red-500 my-2 text-sm">
        {error?.message || gError?.message}
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <PageTitle title="Log In" />
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="abc@abc.com"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: { value: true, message: "Email is Required" },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a Valid Email",
                  },
                })}
              />
              <label>
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: { value: true, message: "Password is Required" },
                  minLength: {
                    value: 6,
                    message: "Must be 6 Characters or Longer",
                  },
                })}
              />
              <label>
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInErrorMessage}
            <input
              type="submit"
              value="Log In"
              className="btn btn-outline w-full max-w-xs mt-3"
            />
          </form>
          <p>
            <small>
              New Here?
              <Link to="/signup" className="text-primary ml-3">
                Sign Up
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn mx-auto btn-circle btn-outline"
          >
            g
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
