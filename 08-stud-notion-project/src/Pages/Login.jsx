import React from "react";
import login from "../assets/login.png";
import Template from "../Component/Template";
function Login({ setIsLoggedIn }) {
  return (
    <div className="flex justify-center items-center ">
      <Template
        image={login}
        desc1={"Build skills for today, tomorrow, and beyond."}
        desc2={"Educaion to future-proof your carrer. "}
        title={"Welcome Back"}
        formtype={"login"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
}

export default Login;
