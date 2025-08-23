import React, { useState } from "react";
import crime from "../assets/newsLevelImg/crimeNews.png";
import { AppContext } from "../context/AppContext";
function Crime() {
  const { setTitle } = useState(AppContext);
  setTitle("crime");
  return (
    <div>
      <div className="w-full h-full mt-2">
        <img
          src={crime}
          alt="level-image"
          loading="lazy"
          className="h-[30rem] w-full items-center "
        />
      </div>
      
    </div>
  );
}

export default Crime;
