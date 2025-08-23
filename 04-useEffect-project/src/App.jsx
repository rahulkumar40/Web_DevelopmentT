import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  // useEffect(() => {
  //   console.log("Ui rendering done ");
  // });

  // useEffect(() => {
  //   console.log("Ui rendering done ");
  // }, []);

  // useEffect(() => {
  //   console.log("Change observed");
  // }, [text]);

  // useEffect(() => {
  //   console.log("Change observed");
  // }, [text]);

  useEffect(() => {
    console.log("Listener added");
    return ()=>(
      console.log("Listener removed")
    )
  }, [text]);

  function changeHandler(e) {
    // this is very importent to store input data and then set it for useState
    const newText = e.target.value;
    console.log(newText);
    setText(newText);
  }
  return (
    <>
      <div>
        <input
          type="text"
          className="bg-blue-700 p-2 text-white"
          onChange={changeHandler}
          value={text}
        />
      </div>
    </>
  );
}

export default App;
