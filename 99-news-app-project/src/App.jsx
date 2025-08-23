import { useContext, useEffect } from "react";
import NavBar from "./Component/NavBar";
import { AppContext } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import India from "./page/India";
import Crime from "./page/Crime";
import Technology from "./page/Technology";
import Cricket from "./page/Cricket";
import About from "./page/About";
import SaveCart from "./page/SaveCart";

function App() {
  const {
    title,
    setTitle,
    newData,
    loading,
    setLoading,
    fetchData,
    errMsg,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, [title]);

  return (
    <div className="w-screen min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation bar */}
      <NavBar />

      {/* Page content */}
      <main className="w-11/12 max-w-[1140px] mx-auto py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<India />} />
          <Route path="/crime" element={<Crime />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/saveCart" element={<SaveCart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
