import React, { useState } from "react";

function Card({ id, info, price, name, image,romoveTour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}...` ;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div>
      <div className="card">
        <img src={image} alt="imageHere" className="image" />
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          <p>{description} <span className="read-more cursor-pointer" onClick={readmoreHandler}>
            {readmore ? `show less` : "read more"}
          </span></p>
          
        </div>
      </div>
      <button className="not-interest " onClick={() => romoveTour(id)}>
        Not interest
      </button>
    </div>
  );
}

export default Card;
