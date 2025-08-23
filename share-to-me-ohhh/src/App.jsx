import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import {FacebookShareCount} from 'react-share';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <div>
            {/* <FacebookShareCount size={32}  url={"google.com"} >google <div></div></FacebookShareCount> */}
        </div>

    </div>
  );
}

export default App;
