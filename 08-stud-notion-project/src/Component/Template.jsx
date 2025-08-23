import React from "react";
import frameImg from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";
function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="flex  justify-between max-w-[1160px]  w-11/12 py-12 mx-auto gap-x-12 ">
      <div className="max-w-[450px] w-11/12">
        <h1 className="text-gray-50 text-[1.7rem] leading-[2.375rem] font-semibold ">
          {title}
        </h1>
        <p className=" text-[1.125rem] leading-[1.625rem] mt-4 flex flex-col">
          <span className="text-gray-50">{desc1}</span>
          <span className="text-blue-300">{desc2}</span>
        </p>
        <div>
          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
        <div className="flex justify-center items-center w-full my-4 gap-x-2">
          <div className="h-[1px] bg-gray-950 w-full"></div>
          <p>or</p>
          <div className="h-[1px] bg-gray-950 w-full"></div>
        </div>
        <button className="text-white flex items-center justify-center w-full rounded-[8px] px-[13px] py-[8px] gap-x-2 border-2 border-gray-500 hover:border-black mt-6 text-xl  ">
          <FcGoogle />
          <p>Sign in with Google</p>
        </button>
      </div>

      <div className="relative">
        <img
          className="w-[400px] h-[350px]"
          width={558}
          height={584}
          loading="lazy"
          src={frameImg}
          alt="frame"
        />
        <img
          className=" w-[400px] h-[350px] absolute -top-4 right-4 "
          src={image}
          width={550}
          height={570}
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
}

export default Template;
