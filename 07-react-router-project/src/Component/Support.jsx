import React from "react";
import { useNavigate } from "react-router-dom";
function Support() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/labs");
  }
  return (
    <div className="bg-red-400  w-[100vw]">
      <div className="mb-9">This is support page</div>
      <button
        className="border-[3px] border-black rounded-md "
        onClick={clickHandler}
      >
        Move to labs page...
      </button>
    </div>
  );
}

export default Support;
