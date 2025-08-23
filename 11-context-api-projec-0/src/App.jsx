import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { AppContextA } from "./Context/AppContextA";
import Blog from "./Component/Blog";
import Header from "./Component/Header";
import Paggination from "./Component/Paggination";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";
function App() {
  const [searchPara, setSearchParam] = useSearchParams();
  const location = useLocation();

  const { fetchData, posts } = useContext(AppContextA);
  console.log("Data fetching ....");
  useEffect(() => {
    const page = searchPara.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      // iska matlab tag wala page show krna h
      const tag = location.pathname.split("/").at(-1);
      fetchBlogPost(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/".replaceAll("-", " "));
    } else {
      fetchBlogPost(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog/:blogId" element={<Blog></Blog>}></Route>
        <Route path="/tags/:tag" element={<Tag></Tag>}></Route>
        <Route path="/categories/:category" element={Categroy}></Route>
      </Routes>
    </>
  );
}

export default App;
