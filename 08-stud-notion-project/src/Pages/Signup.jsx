import React from "react";
import { useState } from "react";
import img from "../assets/signup.png";
import Template from "../Component/Template";
function Signup({setIsLoggedIn}) {
  return (
    <div>
      <Template
        tittle="Join the millions learning to code with StudyNotaion for free"
        desc1="Build skills for today, tomorrw, and beyond."
        desc2="Education to future-proof your career"
        image={img}
        formtype={"signup"}
        setIsLoggedIn={setIsLoggedIn}
      ></Template>
    </div>
  );
}

export default Signup;
