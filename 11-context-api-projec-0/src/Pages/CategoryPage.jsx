import React from "react";
import Header from "../Component/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../Component/Blog";
import Paggination from "../Component/Paggination";

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/".at(-1));
  return (
    <div>
      <Header />

      <div>
        <button onClick={() => navigate(-1)}></button>
        <h2>
          Blogs on <span>#{category}</span>
        </h2>
      </div>
      <Blog></Blog>
      <Paggination />
    </div>
  );
}

export default CategoryPage;
