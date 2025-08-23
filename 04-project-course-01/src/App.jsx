import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Component/Cards";
import NavBar from "./Component/NavBar";
import Filter from "./Component/Filter";
import { filterData, apiUrl } from "./assets/data";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "./Component/Spinner";

function App() {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  /// creating filter for all type of button 
  const[category , setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output---->
      setCourses(output.data);
    } catch (error) {
      TransformStream.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useState(() => {
    fetchData();
    //
  }, []);

  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <div className="min-h-screen flex flex-col ">
        <div>
          <NavBar />
        </div>
        <div className="bg-blue-900 bg-opacity-75">
          <div>
            <Filter filterData={filterData} category={category} setCategory={setCategory}/>
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h[50vh]">
            {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
