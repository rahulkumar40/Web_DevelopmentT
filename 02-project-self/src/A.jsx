import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Component/product";

function App() {
  const [data, setData] = useState('');
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  function inputChnageHandler(e){
    setTitle(e.target.value)
    console.log(e.target.value);
  }
  function dateChnageHandler(e){
    setDate(e.target.value)
    console.log(e.target.value);
  }
  function submitHandler(e){
    e.preventDefault();
    const product = {
      title : newTitle,
      data: newDate
    }
    console.log(product);
    setData(product);
  }

  return (
    <>
    <form action="" onSubmit={submitHandler}>
      <div className="flex justify-between align-middle mx-5 max-w-[ 1000px] bg-blue-700 h-[3rem]">
        <label className="text-2xl " htmlFor="title">Title</label>
        <input type="text" className=" border rounded-md text-white  bg-gray-500" onChange={inputChnageHandler}/>
      </div>
      <div className="flex justify-between align-middle mx-5 max-w-[ 1000px] bg-blue-700 h-[3rem]">
        <label className="text-2xl " htmlFor="title">Title</label>
        <input type="date" className=" border rounded-md text-white  bg-gray-500" onChange={dateChnageHandler}/>
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>

    </form>
    <div>
      <Product data={data}></Product>
    </div>
    </>
  );
}

export default App;
