import React, { useEffect, useLayoutEffect, useContext } from "react";
import SignUp from "../Component/UserLogSignCareer/SignUp";
import { useForm } from "react-hook-form";
import BlogPage from "../Component/BlogPage";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
function Signup() {
  const { user ,} = useContext(AppContext);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location]);
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  });
  return (
    <div className="">
      <SignUp />
      <div className="mx-auto px-5 py-3 bg-gradient-to-r from-indigo-700 to-red-600 w-[87vw]">
        <BlogPage />
      </div>
    </div>
  );
}

export default Signup;
