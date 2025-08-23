import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./assets/data";
import Tours from "./Component/Tours";
import {dataImg} from "./assets/imgValue";
import ImgCard from "./Component/ImgCard";
function App() {
  const [tours, setTour] = useState(data);
  const [id, setId] = useState([]);
  const [imgData, setImgData] = useState(dataImg);
  function removeHandler(id) {
    console.log(id);
    const newTour = tours.filter((tour) => tour.id !== id);
    setTour(newTour);
    setId((pre) => [...pre, id + "  "]);
  }
  return (
    <>
      {/* <div>
      <p>{imgValue[0].id}</p>
      <p>{imgData[0].name}</p>
      <img src={agra} alt="ljdlk fjlse"  />
    </div> */}
      <div>
        <ImgCard imgData={imgData}></ImgCard>
      </div>
      <div>
        {tours.length == 0 ? (
          <div>
            <h1>No any tour left</h1>
            <button onClick={() => setTour(data)}>Referes The Page</button>
          </div>
        ) : (
          <div>
            {" "}
            <p>Not interested Tour no. {id}</p>
            <Tours tours={tours} removeHandler={removeHandler} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
