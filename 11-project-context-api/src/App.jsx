import { useState, useEffect, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header";
import Pagination from "./Component/Pagination";
import Blogs from "./Component/Blogs";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
function App() {
  const [count, setCount] = useState(0);
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <>
      <Header />
      <Blogs />
      <Pagination />
    </>
  );
}

export default App;
