import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DateCard from "./Component/DateCard";
import Item from "./Component/Item";
import Card from "./Component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="bg-blue-700 rounded-md border-spacing-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        sunt,
      </p>
      <p className="bg-blue-400 border-spacing-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        sunt,
      </p>
      <Card>
      <div className="bg-green-600 border-4 ">
        <DateCard day={12} month={"jun"} year={1990}></DateCard>
        <Item name="Nirma">
          Hello ji me hu appka first item.
        </Item>
        <DateCard day={12} month={"jun"} year={1990}></DateCard>
        <Item name="Nirma">
          Hello ji me hu appka first item.
        </Item>
        <DateCard day={12} month={"jun"} year={1990}></DateCard>
        <Item name="Nirma">
          Hello ji me hu appka first item.
        </Item>
        <DateCard day={12} month={"jun"} year={1990}></DateCard>
        <Item name="Nirma">
          Hello ji me hu appka first item.
        </Item>
      </div>
      </Card>
     
    </>
  );
}

export default App;
