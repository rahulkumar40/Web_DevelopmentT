import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./assets/data";
import Tours from "./Component/Tours";

function App() {
  const [tours, setTours] = useState(data);
  function romoveTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  if(tours.length===0){
    return (
      <div>
        <h2>No Tors Left</h2>
        <button onClick={()=> setTours(data)}>Referece</button>
      </div>
    )
  }
  return (
    <>
      <div>
        <Tours tours={tours} romoveTour={romoveTour}>
        </Tours>
      </div>
    </>
  );
}

export default App;
