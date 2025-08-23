import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, NavLink, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Support from "./Component/Support";
import Labs from "./Component/Labs";
import NotFound from "./Component/NotFound";
import MainHeader from "./Component/MainHeader";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/support">support</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        {/* <Route path="/" element={<div>Home Page</div>} /> */}
        <Route path="/" element={<MainHeader />}>
        {/* Default route  */}
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
