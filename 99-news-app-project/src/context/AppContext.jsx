import { createContext, useState } from "react";

export const AppContext = createContext();
export default function ContextAppProvider({ children }) {
  const [title, setTitle] = useState("world");
  const [searchValue, setSearchVal] = useState("");

  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  async function fetchData() {
    // https://newsapi.org/v2/everything?q=${title}&from=2025-06-28&sortBy=publishedAt&apiKey=7b3daa7190344866a0747da4804d439c
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${title}&from=2025-06-28&sortBy=publishedAt&apiKey=7b3daa7190344866a0747da4804d439c`
      );
      const data = await response.json();
      setErrMsg(data);
      //   console.log(data); // test case .. correct ....'c==
      console.log(data);
      setNewData(data.articles);
      console.log(newData);
      //   console.log(newData) // test case ok....
    } catch (erroe) {
      console.log("Error occure" + erroe);
      console.error(erroe);
    }
    setLoading(false);
  }

  const value = {
    title,
    setTitle,
    fetchData,
    loading,
    setLoading,
    newData,
    setNewData,
    searchValue,
    setSearchVal,
    errMsg,
    setErrMsg,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
