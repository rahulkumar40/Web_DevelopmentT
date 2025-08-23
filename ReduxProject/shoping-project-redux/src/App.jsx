import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./Page/Home";
import Cart from "./Page/Cart";
import NavBar from "./Component/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hii
      <NavBar  />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
