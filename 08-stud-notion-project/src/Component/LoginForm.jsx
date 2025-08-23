import React from "react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Loged In");
    navigate("/dashboard");
  }
  return (
    <div className="">
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-col gap-y-4 mt-6"
      >
        <label htmlFor="email" className="w-full">
          <p className="text-white mb-2 text-[0.75rem] leading-[ 1.74rem]">
            Email Address <sup className="text-red-600">*</sup>
          </p>
          <input
            className="w-full outline-none rounded-[0.5rem] bg-gray-700 text-white py-1 px-2"
            type={"text"}
            required
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter email id"
          />
        </label>
        <label htmlFor="password" className="relative w-full">
          <p className="text-white mb-2 text-[0.75rem] leading-[ 1.74rem]">
            Password <sup className="text-red-600">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.pas}
            onChange={changeHandler}
            name="password"
            placeholder="Enter password"
            className="w-full outline-none rounded-[0.5rem] bg-gray-700 text-white py-1 px-2"
          />
          {/* onClick={()=>{setShowPassword(pre => !pre)}} */}
          <span
            className="absolute right-3 top-[31px] cursor-pointer "
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? (
              <FaEyeSlash fontSize={24} fill="#AFB@BF" />
            ) : (
              <FaEye fontSize={24} fill="#AFB@BF" />
            )}
          </span>

          <Link to="/#">
            <p className="mt-2 hover:underline text-xs text-blue-600 w-full text-right">
              Forgot Password
            </p>
          </Link>
        </label>
        <button className=" bg-amber-500 text-gray-800 flex items-center justify-center w-full rounded-[8px] px-[13px] py-[8px] gap-x-2 border-2 border-gray-500 mt-3 text-xl  ">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
