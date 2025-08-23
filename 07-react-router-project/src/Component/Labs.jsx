import React from "react";
import { useNavigate } from "react-router-dom";

function Labs() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  return (
    <div className="bg-green-400 h-[] w-[100vw]">
      <div className="mb-9">
        This is lab page
      </div>
      <button className="border-[3px] border-black rounded-md " onClick={clickHandler}>Move to about page...</button>
    </div>
  );
}

export default Labs;
