import axios from "axios";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
toast;

function Login() {
  const { register, handleSubmit } = useForm();
  const { color,loading, login, user, showOne, setShowOne } = useContext(AppContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location]);

  const onSubmit = async (data) => {
    await login(data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  });
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r to-red-300 from-teal-500">
      <div className="w-[22rem] bg-gradient-to-r to-red-300 from-teal-500  p-8 rounded-lg shadow-lg">
        <Toaster position="top-center" reverseOrder={false} />
        <h2 className="text-gray-800 text-2xl font-bold mb-5 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="text-gray-50 block mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label className="text-white block mb-2">Password</label>
            <input
              type={showOne ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Enter your password"
            />
            <span
              className="absolute top-[2.6rem] right-4   cursor-pointer text-xl text-white"
              onClick={() => setShowOne(!showOne)}
            >
              {showOne ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 text-right flex justify-between items-center ">
            <Link
              to={"/changePassword"}
              className="text-gray-50 hover:text-pink-800 text-sm"
            >
              Change Password
            </Link>
            <Link
              to="/frogetPassword"
              className="text-gray-50 hover:text-pink-800 text-sm"
            >
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md"
          >
          { 
            !loading ? "login" :  <div className="flex justify-center items-center">
            {" "}
            <button className="spinner bg-white  h-[1rem]"></button></div>
          }
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-100 mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white font-semibold hover:text-sky-700">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
