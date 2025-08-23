import React from "react";
import Header from "../Component/Header";
import { useNavigate } from "react-router-dom";

function TagPage() {
  const navigation = useNavigate();
  const tag = location.pathname.split("/".at(-1));
  return (
    <div>
      <Header />
      <div>
        <button>Back</button>
        <h2>
          Blogs Tagged <span># {tag}</span>
        </h2>
      </div>
    </div>
  );
}

export default TagPage;
