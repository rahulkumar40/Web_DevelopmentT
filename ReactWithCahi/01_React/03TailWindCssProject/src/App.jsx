import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import CardCom from "./Componant/CardCom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-white bg-blue-400 p-5 rounded-xl">
        Hii Rahul, You can do everything
      </h1>

      <CardCom  name="RajRam"/>
      <CardCom name="RamDulare"/>
      <CardCom name="Raghuvir"/>


    </>
  );
}

export default App;
