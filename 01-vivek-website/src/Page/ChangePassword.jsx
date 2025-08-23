import React, { useContext, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { Toaster } from "react-hot-toast";
import { FaEye ,FaEyeSlash} from "react-icons/fa";
function ChangePassword() {
  const { showOne, showTwo, setShowOne, setShowTwo, changePassword } =
    useContext(AppContext);
  const { register, handleSubmit, watch } = useForm();
    const [passShow, setPassShow] = useState(false);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changePasswordHandler = async (data) => {
    await changePassword(data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r to-teal-400 from-fuchsia-500">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[22rem] bg-gradient-to-r to-teal-400 from-fuchsia-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-5 text-center">Change Password</h2>
        <form onSubmit={handleSubmit(changePasswordHandler)}>
          {/* Old Password Field */}
          <div className="mb-4 relative">
            <label className="text-white block mb-2">Current Password</label>
            <input
              type={passShow ? `password`:`text`}
              {...register("password", {
                required: "Current Password is required",
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Enter old password"
            />
            <span
              className="absolute top-[2.6rem] right-4   cursor-pointer text-xl text-white"
              onClick={() => setPassShow(!passShow)}
            >
              {passShow ? <FaEye /> : <FaEye />}
            </span>
          </div>

          {/* New Password Field */}
          <div className="mb-4 relative">
            <label className="text-white block mb-2">New Password</label>
            <input
              type={showOne ? "text" : "password"}
              {...register("newPassword", {
                required: "New password is required",
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Enter new password"
            />
            <span
              className="absolute top-[2.6rem] right-4   cursor-pointer text-xl text-white"
              onClick={() => setShowOne(!showOne)}
            >
              {showOne ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Confirm New Password Field */}
          <div className="mb-4 relative">
            <label className="text-white block mb-2">Confirm New Password</label>
            <input
              type={showTwo ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
              placeholder="Re-enter new password"
            />
            <span
              className="absolute top-[2.6rem] right-4  cursor-pointer text-white text-xl"
              onClick={() => setShowTwo(!showTwo)}
            >
              {showTwo ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Change Password Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md"
          >
            Change Password
          </button>
        </form>
        <div className="flex justify-between items-center mt-2">
          <Link to="/login" className="text-blue-700 font-semibold hover:text-blue-800">
            Login
          </Link>
          <Link to="/forgotPassword" className="text-blue-700 font-semibold hover:text-blue-800">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;