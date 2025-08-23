import React, { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl.js";
import { use } from "react";
export const AppContextA = createContext();

export default function AppContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);

  //   useEffect( ()=>{
  async function fetchData(page = 1, tag = null, category) {
    // const url = `${baseUrl}?page=${page}`;
    const url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if(category) {
      url += `&categroy=${category}`;
    }
    setLoading(true);
    try {
      const resp = await fetch(url);
      const result = await resp.json();
      console.log(result);
      setPage(result.page);
      setTotalPage(result.totalPages);
      setPost(result.posts);
    } catch (error) {
      console.log("Data is fetchee" + error);
      setPage(1);
      setTotalPage(null);
      setPost([]);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchData(page);
  }
  const value = {
    posts,
    setPost,
    page,
    setPage,
    totalPage,
    setTotalPage,
    loading,
    setLoading,
    handlePageChange,
    fetchData,
  };
  return <AppContextA.Provider value={value}>{children}</AppContextA.Provider>;
}
