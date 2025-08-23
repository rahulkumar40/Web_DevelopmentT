import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Component/Counter";
import { products } from "./assets/data.js";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {products.map((data) => (
        <div key={data.id}>
          <p>{data.title}</p>
          <div>
            <img src={data.image} alt="" />
            <p>{data.rate}</p>
          </div>
          <p>{data.description}</p>
          <p>{data.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
