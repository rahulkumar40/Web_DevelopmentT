import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Component/Profile";
import reviews from "./assets/data.js"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" flex justify-center items-center flex-col bg-blue-950 w-[100vw] h-[100vh]">
        <div className="mb-9 text-3xl text-black font-bold bg-white ">
          <h1>Profile Page</h1>
        </div>
        <div className="">
          <Profile reviews={reviews}></Profile>
        </div>
      </div>
    </>
  );
}

export default App;
