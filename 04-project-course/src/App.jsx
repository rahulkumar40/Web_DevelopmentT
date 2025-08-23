import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Filter from "./Component/Filter";
import NavBar from "./Component/NavBar";
import { filterData, apiUrl } from "./assets/data";
import { useEffect } from "react";
import Cards from "./Component/Cards";

function App() {
  const [courses, setCourse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const realData = await res.json();
        console.log(realData);
        setCourse(realData.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  

  return (
    <div>
      <NavBar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
