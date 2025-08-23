import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/support");
  }

  function backkHandler() {
    navigate(-1);
  }
  return (
    <div className="bg-red-400  w-[100vw] flex flex-col justify-center items-center">
      <div className="mb-9">This is about page</div>
      <button
        className="w-[235px] border-[3px] border-black rounded-md "
        onClick={clickHandler}
      >
        Move to support page...
      </button>

      <button
        className="px-4 py-2 my-3 border-2 border-black"
        onClick={backkHandler}
      >
        Go back
      </button>
    </div>
  );
}

export default About;
