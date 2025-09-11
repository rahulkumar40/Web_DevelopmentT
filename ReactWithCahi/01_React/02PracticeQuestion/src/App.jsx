import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Increase value {count}</p>
      <button
        onClick={() => {
          if (count < 20) {
            setCount(count + 1);
          }
        }}
      >
        Add value
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease value
      </button>
    </>
  );
}

export default App;
