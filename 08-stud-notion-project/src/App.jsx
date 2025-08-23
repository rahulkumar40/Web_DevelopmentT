import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import PrivateRout from "./Component/PrivateRout";

function App() {
  // const [count, setCount] = useState(0);
  const [isLoggedIn, setIsloggedIn] = useState(false);

  return (
    <>
      <div className="h-screen w-screen bg-gray-800 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsloggedIn} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsloggedIn} />}
          />
          <Route
            path="/dashbord"
            element={
              <PrivateRout isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRout>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
