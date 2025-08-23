import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/CounterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>{counter}</p>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  );
}

export default App;
