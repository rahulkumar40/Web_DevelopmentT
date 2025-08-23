import React from "react";
import Card from "./Card";

function Tours({ tours , removeHandler }) {
  return (
    <>
      <div>
        <div>
          <h2>LOves Tour Plan</h2>
        </div>
        <div>
          {tours.map((tour) => {
            return <Card key={tour.id} {...tour} removeHandler={removeHandler}></Card>;
          })}
        </div>
      </div>
    </>
  );
}

export default Tours;
