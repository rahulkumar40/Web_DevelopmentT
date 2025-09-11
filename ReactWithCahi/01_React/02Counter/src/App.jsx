import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // to change the ui
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // it will not update the counter value on the h2 as first responce
    console.log("value added || Clicked ", Math.random());
    counter += 1;
    setCounter(counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Cunter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>{counter}</p>
    </>
  );
}

export default App;
