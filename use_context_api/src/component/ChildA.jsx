import React, { useContext } from "react";
import ChildB from "./ChildB";
import { UserContext } from "../App";

function ChildA() {
  const user = useContext(UserContext);
  return (
    <div>
      <ChildB />
    </div>
  );
}

export default ChildA;
