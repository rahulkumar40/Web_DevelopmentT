import React, { useContext } from "react";
import india from "../assets/newsLevelImg/indiaNews.png";
import Home from "./Home";
import { AppContext } from "../context/AppContext";
function India() {
    const {setTitle} = useContext(AppContext);
    setTitle('india');
  return (
    <div>
      <div className="w-full h-full mt-2">
        <img
          src={india}
          alt="level-image"
          loading="lazy"
          className="h-[30rem] w-full items-center "
        />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default India;
