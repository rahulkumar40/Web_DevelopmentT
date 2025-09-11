import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildA from "./component/ChildA";

// step 1 --> to crete context
const UserContext = createContext();

// step 2 --> wrap all the chil dinside a provider

// step 3 --> pass value

// step 4 --> consumer k andar jaake use krna
function App() {
  const [user, setUser] = useState({ name: "rahul" });

  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
