import React, { useState } from "react";

function Card({ removeHandler, id, image, name, info, price }) {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(1, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }
  return (
    <div>
      <div>
        <img src={image} alt="image i here" />
        <div className="detail-tour">
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <div className="discription">
          <p>
            {description}
            <span
              onClick={readMoreHandler}
              className="bg-blue-500 cursor-pointer"
            >
              {readMore ? "Show less" : "read more"}
            </span>
          </p>
        </div>
        <div>
          <button
            className="border-x-4 border-y-4 border-black rounded-md px-4 py-2 my-4 active:bg-gray-400 transition-all ease-linear delay-100 hover:bg-blue-300"
            onClick={(()=> removeHandler(id))}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
