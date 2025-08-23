import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash, FaEye } from "react-icons/fa";
function SignupForm({ setIsLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [accoutType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.conformPassword) {
      toast.error("Password not same");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Done !!");
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    const finalData = {
      ...formData,
      accoutType,
    };
    console.log("Final data");
    console.log(finalData);
    console.log("Printing account data");
    console.log(accountData);
    navigate("/dashbord");
  }
  return (
    <div className="p-2  bg-opacity-95">
      {/* Student-Instructor tab */}
      <div className="bg-gray-700 flex justify-between px-4  py-2  rounded-[20px] mt-3 w-8/12 gap-x-1">
        <button
          className={`${
            accoutType === "student"
              ? "bg-gray-800 text-gray-50"
              : "bg-transparent text-gray-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accoutType === "instructor"
              ? "bg-gray-800 text-gray-50"
              : "bg-transparent text-gray-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form action="" onSubmit={submitHandler}>
        {/* first and last name  */}
        <div className="flex justify-between gap-x-4 items-center w-full mt-4 ">
          <label htmlFor="" className="w-full">
            <p className="text-white mb-2 ml-1 text-[0.75rem] leading-[ 1.74rem]">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="First Name"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              className="w-full outline-none rounded-[0.5rem] bg-gray-700 text-white py-1 px-2"
            />
          </label>
          <label htmlFor="" className="w-full">
            <p className="text-white ml-1 mb-2 text-[0.75rem] leading-[ 1.74rem]">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Last Name"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              className="w-full outline-none rounded-[0.5rem] bg-gray-700 text-white py-1 px-2"
            />
          </label>
        </div>
        <div className="w-full mt-4 ">
          <label htmlFor="" className="w-full">
            <p className="text-white ml-1 mb-2 text-[0.75rem] leading-[ 1.74rem]">
              Email Address<sup className="text-red-500">*</sup>
            </p>
            <input
              type="email"
              required
              placeholder="Enter email adds "
              name="email"
              onChange={changeHandler}
              value={formData.email}
              className="w-full outline-none rounded-[0.5rem] bg-gray-700 text-white py-1 px-2"
            />
          </label>
          {/* create password and confirm passsword  */}
          <div className="w-full mt-4 flex justify-between items-center gap-x-4">
            <label htmlFor="" className="relative w-full">
              <p className="text-white ml-1 mb-2 text-[0.75rem] leading-[ 1.74rem]">
                Create Password <sup className="text-red-500">*</sup>
              </p>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter password"
                name="password"
                onChange={changeHandler}
                value={formData.password}
                className="w-full outline-none rounded-[0.5rem] bg-gray-700 text-white py-1 px-2"
              />
              <span
                className="absolute right-3 top-8"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {!showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
            <label htmlFor="" className="relative w-full">
              <p className="text-white ml-1 mb-2 text-[0.75rem] leading-[ 1.74rem] text-white">
                Conform Password <sup className="text-red-500">*</sup>
              </p>
              <input
                type={showPassword1 ? "text" : "password"}
                required
                placeholder="Conform password"
                name="conformPassword"
                onChange={changeHandler}
                value={formData.conformPassword}
                className="w-full outline-none rounded-[0.5rem] bg-gray-700 text-white py-1 px-2"
              />
              <span
                className="absolute right-3 top-[2.2rem]"
                onClick={() => {
                  setShowPassword1(!showPassword1);
                }}
              >
                {!showPassword1 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
          </div>
          <div className="w-full mt-4 ">
            <button className=" bg-amber-500 text-gray-800 flex items-center justify-center w-full rounded-[8px] px-[13px] py-[8px] gap-x-2 border-2 border-gray-500 mt-3 text-xl  ">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
