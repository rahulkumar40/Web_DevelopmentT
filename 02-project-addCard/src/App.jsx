import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Component/Product";
import NewProduct from "./Component/NewProduct";
function App() {
  const [count, setCount] = useState(0);
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2022, 8, 10),
    },
    {
      id: "p2",
      title: "SurfExcel",
      amount: 120,
      date: new Date(2024, 8, 5),
    },
    {
      id: "p3",
      title: "Weel",
      amount: 150,
      date: new Date(2021, 4, 3),
    },
    {
      id: "p4",
      title: "Ghadhi",
      amount: 80,
      date: new Date(2018, 8, 11),
    },
  ];
  function printProductData(data) {
    console.log("I am inside App");
    console.log(data);
  }
  return (
    <>
      <h2 className="text-orange-500 bg-blue-700 w-[1200px]">Day 2 Restart</h2>
      <NewProduct printProduct={printProductData} />
      <div>
        <Product data={products} />
      </div>
    </>
  );
}

export default App;
