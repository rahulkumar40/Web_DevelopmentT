import React, { useState } from "react";
import Card from "./Card";

function Tours({tours,romoveTour}) {
  return (
    <div className="container">
      <h1 className="title">Plan with Love</h1>

      <div className="cards">
            {
                 tours.map((tour)=>{
                  return <Card key={tour.id} {...tour} romoveTour={romoveTour}></Card>
                  // {...tour} --> cloning the tour object data and send to the card component
                 }) 
            }
      </div>
    </div>
  );
}

export default Tours;
