import { createContext, useEffect, useState } from "react";
// first work -> step 1
export const AppContext = createContext();
import { baseUrl } from "../baseUrl";

// second work->  step 2
// children == app ke under jo prasent hoga ... children bolenge

// here all state are used to manage the rendering of ui

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setPage(data.page);
      setPost(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("error in fating data");
      setPage(1);
      setPost([]);
      setTotalPages(null);
    }
    setLoading(false);
  }


  function hendlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    posts,
    loading,
    setLoading,
    setPost,
    page,
    setPage,
    totalPages,
    setTotalPages,
    hendlePageChange,
    fetchBlogPosts,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

