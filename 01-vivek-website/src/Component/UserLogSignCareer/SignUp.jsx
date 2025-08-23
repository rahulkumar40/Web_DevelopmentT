import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, color, loading } = useContext(AppContext);
  // Handle form submission
  const onSubmit = async (data) => {
    try {
      await signup(data);
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center flex-col items-center gap-x-4 mb-8">
        <div
          className={` ${
            color ? `bg-gray-300 text-black` : `bg-gray-800 text-white`
          } text-black p-6 rounded-lg shadow-md mx-auto w-[87vw] my-2 lg:w-[45vw] px-10`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block mb-1 font-semibold">First Name</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                {...register("firstName", {
                  required: "First Name is required ",
                })}
                name="firstName"
                className="w-full p-2 border rounded bg-gray-100"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-1 font-semibold">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                {...register("lastName", { required: "Last Name is required" })}
                name="lastName"
                className="w-full p-2 border rounded bg-gray-100"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                name="email"
                className="w-full p-2 border rounded bg-gray-100"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 4 characters",
                  },
                })}
                name="password"
                className="w-full p-2 border rounded bg-gray-100"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Your Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                name="confirmPassword"
                className="w-full p-2 border rounded bg-gray-100"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* User Role Selection */}
            <div>
              <label className="block text-gray-300 font-semibold">Role</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Admin"
                    {...register("accountType", {
                      required: "Please select a role",
                    })}
                    className="mr-2"
                  />
                  Admin
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="User"
                    {...register("accountType", {
                      required: "Please select a role",
                    })}
                    className="mr-2"
                  />
                  User
                </label>
              </div>
              {errors.accountType && (
                <p className="text-red-500">{errors.accountType.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-center bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
            >
              {!loading ? (
                "Sign Up"
              ) : (
                <div className="flex justify-center items-center">
                  {" "}
                  <button className="spinner bg-white  "></button>
                </div>
              )}
            </button>
          </form>
          <div>
            <p className="text-end mt-2 px-2">
              if you are already register{" "}
              <Link
                to="/login"
                className=" text-blue-700 font-semibold hover:text-blue-600"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
