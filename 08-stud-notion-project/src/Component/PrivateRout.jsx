import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
function PrivateRout({ isLoggedIn, children }) {
  //   const navigate = useNavigate();
  if (isLoggedIn) {
    return children;
  } else {
    <Navigate to="/login" />;
    //     navigate("/");
  }
  return <div></div>;
}

export default PrivateRout;
