import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Random from "./Component/Random";
import Tag from "./Component/Tag";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex flex-col background  ">
        <h1 className="bg-white  w-11/12 text-center mt-[40px]  py-3 text-3xl rounded-md mx-auto font-bold">RANDOM GIFS</h1>
        <div className="items-center w-full flex flex-col justify-center mt-5 rounded-md">
          <Random/>
          <Tag/>
        </div>
      </div>
    </>
  );
}

export default App;
