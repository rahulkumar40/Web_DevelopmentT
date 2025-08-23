import React from "react";
import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Card({ id, name, path }) {
  let realId = id;
  const [scrollId, setScrolleId] = useState(5);
  {
    if (id <= scrollId) {
    }
  }
  return (
    <>
      {" "}
      {id ? (
        <div className="flex flex-col justify-center items-center bg-gray-400   h-[170px] w-[220px] m-1">
          {/* <p>{id}</p> */}
          <img className="object-cover h-[120px] w-[210px]" src={path} alt="" />
          <p>{name}</p>
        </div>
      ) : (
        <p className="hidden">i rahul </p>
      )}
      <div className="absolute right-[3rem] top-[7rem]">
        <button
          onClick={() => {
            setScrolleId(id + 2);
            realId++;
          }}
        >
          {" "}
          <FaArrowAltCircleRight />
        </button>
      </div>
    </>
  );
}

export default Card;
