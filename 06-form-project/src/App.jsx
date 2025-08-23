import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // const changeFirtNameHandler = (event) => {
  //   // console.log("Print first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  //   console.log(firstName)
  // };
  // const changeLastNameHandler = (event) => {
  //   // console.log("Print last name");
  //   // console.log(event.target.value);
  //   setlastName(event.target.value);
  //   console.log(lastName)
  // };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    isVisible: false,
    mode: "",
    favCar: "",
  });
  console.log(formData);

  function changeHandler(event) {
    // last important step...

    const { name, value, checked, type } = event.target;
    setFormData((prevFormdata) => {
      return {
        ...prevFormdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    
  }

  const [data, setData] = useState([]);
  function submitHandler(event) {
    event.preventDefault();
    setData((pre) => [...pre, formData]);
    console.log("Data of form ....");
    console.log(data);
  }
  console.log(data);

  return (
    <>
      <div className="">
        <form
          action=""
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <div className="input-section">
            <label htmlFor="first-name">First Name : </label>
            <input
              type="text"
              name="firstName"
              className="bg-white border-2 border-white"
              placeholder="First-Name"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>
          <div className="input-section">
            <label htmlFor="last-name">Last Name : </label>
            <input
              type="text"
              className="bg-white border-2 border-white"
              placeholder="Last-Name"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>
          <div className="input-section">
            <label htmlFor="emailId">Email : </label>
            <input
              type="email"
              className="bg-white"
              name="emailId"
              placeholder="Enter your email here"
              onChange={changeHandler}
              value={formData.emailId}
            />
          </div>
          <div>
            <label htmlFor="">Comment</label>
            <textarea
              placeholder="Enter your comment"
              name="comments"
              className="bg-white"
              onChange={changeHandler}
              value={formData.comments}
              id=""
            ></textarea>
          </div>
          <div>
            <label htmlFor="isVisible">Am I Visible</label>
            <input
              type="checkbox"
              onChange={changeHandler}
              name="isVisible"
              id="isVisible"
              checked={formData.isVisible}
            />
          </div>
          <div>
            <fieldset className="border-2 border-black">
              <legend>Mode</legend>
              <label htmlFor="offlineMode">Offline Mode</label>
              <input
                type="radio"
                onChange={changeHandler}
                id="offlineMode"
                name="mode"
                value={"Offline-Mode"}
                checked={formData.mode === "Offline-Mode"}
              />
              <label htmlFor="onlineMode">Online Mode</label>
              <input
                type="radio"
                onChange={changeHandler}
                id="onlineMode"
                name="mode"
                value={"Online-Mode"}
                checked={formData.mode === "Online-Mode"}
              />
            </fieldset>
          </div>
          <div>
            <label htmlFor="favCar">Tell me favourite car </label>
            <select
              name="favCar"
              id="favCar"
              value={formData.favCar}
              onChange={changeHandler}
            >
              <option value="None">Select option</option>
              <option value="Thar">Thar</option>
              <option value="Scarpio">Scarpio</option>
              <option value="Velbo">Velbo</option>
              <option value="Fartuner">Fartuner</option>
              <option value="Lagender">Lagender</option>
            </select>
          </div>
          <div className="flex gap-5">
            <button type="submit">submit</button>
            <button type="reset">reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
