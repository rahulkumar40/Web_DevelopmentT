import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // first --> side effect function
  // secornd --> clean-up function
  // third --> comma seperated dependesis list on the basis the side effect activited

  //   useEffect( ()=>{
  //     first

  //     return ()=>{
  //         second
  //     }
  //   }, [third])

  // variation 01 --> runs on every rendering
  // it may run twise at first time because of sticMode  in the main.jsx
//   useEffect(() => {
//     alert("This is variabtion 01");
//   });


    // variation 02 
    // useEffect(()=>{
    //     alert("I will run only at first render ")
    // }, []);


    // variation 03 
    // it run at count --> becuase initial coutn contain 0 value so useEffect hit 
    // useEffect(()=>{
    //     alert("I will run only at first render ")
    // }, [count]);

    // variation no 04 
    // useEffect(()=>{
    //     alert("I am version 4 multiple depensisy ")
    // }, [count ,total])

    // variation no 05 
    useEffect(()=>{
        alert("Ui is updated ")
        return (
            alert("ui is mounted Ui ")
        )
    }, [count])

  function handleCount() {
    setCount(count + 1);
  }
  const handleTotal = ()=>{
    setTotal(total+1)
  }
  return (
    <>
      <div>Hello world</div>
      <div>
        <p>Counter value {count}</p>
        <button onClick={handleCount}>Click me </button>
      </div>
      <div>
        <p>Total is {total}</p>
        <button onClick={handleTotal}>Check Total</button>
      </div>
    </>
  );
}

export default App;
