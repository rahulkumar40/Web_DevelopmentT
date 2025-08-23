import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Card(props) {
  const [idx, setIndex] = useState(0);
  let len = props.data.length;
  let name = props.data[idx].name;
  let image = props.data[idx].image;
  let text = props.data[idx].text;
  let job = props.data[idx].job;
  const clickHandlerD = function () {
    console.log(idx);
    if (idx > 0) setIndex(idx - 1);
    else  setIndex(len-1);
  };
  const clickHandlerI = () => {
    if (idx !== props.data.length - 1) {
      setIndex(idx + 1);
    } else setIndex(0);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gray-200 w-[400px] border-2 border-gray-400 relative">
      <div className="bg-blue-500 h-[80px] w-[80px] rounded-full absolute left-3 top-[-50px] ">
        <img className="h-11/12 rounded-full" src={image} alt="image here" />
      </div>
      <div>
        <p className="text-center text-2xl">{name}</p>
        <p className="text-center text-[0.7rem] text-blue-600">{job}</p>
      </div>
      <div className="p-4 text-center">
        <span>"</span>
        <p>{text}</p>
        <span>"</span>
      </div>
      <div className="text-2xl hover:bg-opacity-40">
        <button className="mx-4" onClick={clickHandlerD}>
          <FaChevronLeft />
        </button>
        <button className="mx-4" onClick={clickHandlerI}>
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            let val = Math.floor(Math.random() * len);
            // console.log(val);
            setIndex(val);
          }}
        >
          Suprise Dud
        </button>
      </div>
    </div>
  );
}

export default Card;
