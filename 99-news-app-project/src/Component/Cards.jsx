import React, { useContext } from "react";
import Card from "./Card";
import {AppContext} from '../context/AppContext'
function Cards() {
    const {newData} = useContext(AppContext)
    // console.log("data is"+ newData);
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-[1140px] mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-3 gap-x-2 gap-y-2 mx-auto mt-1">
          {newData.map((data, index) => {
            return <Card key={index} {...data} newsData={data}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
