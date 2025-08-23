import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streedAd: "",
    comment: false,
    candidates:false,
    offers:false,
    city: "",
    state: "",
    notification: "",
  });
  console.log(formData);
  function changeHandler(event) {
    const { type, value, checked, name } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type == "checked" ? checked : value,
      };
    });
  }

  const [data, setData] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    setData((pre) => [...pre, formData]);
  }
  useEffect(() => {
    console.log("Inside the use effect or after submit handler");
    console.log(data);
  }, [submitHandler]);

  return (
    <>
      <div className=" h-full w-[100%] bg-gray-600 p-5 flex justify-center items-center">
        <form
          onSubmit={submitHandler}
          action="submit"
          className="flex flex-col rounded-md w-[600px] my-3 p-3"
        >
          <div className=" flex justify-between w-full flex-col gap-y-2">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              name="firstName"
              id="fName"
              placeholder="Rahul"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>
          <div className=" flex justify-between w-full flex-col">
            <label htmlFor="LName">Last Name</label>
            <input
              type="text"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              name="LastName"
              id="lName"
              placeholder="Kumar"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>
          <div className=" flex justify-between w-full flex-col">
            <label htmlFor="emailId">Email Address</label>
            <input
              type="email"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              name="email"
              id="emailId"
              placeholder="rk@gamil.com"
              onChange={changeHandler}
              value={formData.email}
            />
          </div>
          <div className=" flex justify-between w-full flex-col">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              value={formData.country}
              onChange={changeHandler}
            >
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="Nepal">Nepal</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Indonesia">Indonesia</option>
            </select>
          </div>
          <div className=" flex justify-between w-full flex-col">
            <label htmlFor="streetAdd">Street Address</label>
            <input
              type="text"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              name="streedAd"
              id="streetAdd"
              placeholder="Rampur main st"
              onChange={changeHandler}
              value={formData.streedAd}
            />
          </div>
          <div className=" flex justify-between w-full flex-col">
            <label htmlFor="city">City </label>
            <input
              type="text"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              name="city"
              id="city"
              placeholder="Mullana"
              onChange={changeHandler}
              value={formData.city}
            />
          </div>
          <div className=" flex justify-between w-full flex-col">
            <label htmlFor="state">State / Procince </label>
            <input
              type="text"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              name="state"
              id="state"
              placeholder="Utter Pradesh"
              onChange={changeHandler}
              value={formData.state}
            />
          </div>
          <div className=" flex justify-between w-full flex-col">
            <label htmlFor="zipCode">ZIP / Postal code </label>
            <input
              type="text"
              className="bg-white px-3 py-2 rounded-md focus:outline-blue-600 text-xl"
              name="zipCode"
              id="zipCode"
              placeholder="841232"
              onChange={changeHandler}
              value={formData.zipCode}
            />
          </div>
          <div className="">
            <fieldset>
              <legend>By Email</legend>
              <div className=" flex mt-[-4px]  ">
                <input type="checkbox" className="mt-[-30px] w-4" onChange={changeHandler} />
                <div className="pl-2">
                  <label className="text-xl" htmlFor="">
                    Comment
                  </label>
                  <p>
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div className=" flex mt-[-4px]  ">
                <input type="checkbox" className="mt-[-30px] w-4" onChange={changeHandler}/>
                <div>
                  <label className="text-xl" htmlFor="">
                    Condidates
                  </label>
                  <p>Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div className=" flex mt-[-4px]  ">
                <input type="checkbox" id="" className="mt-[-30px] w-4" onChange={changeHandler} />
                <div>
                  <label className="text-xl" htmlFor="">
                    Offer
                  </label>
                  <p>
                    Get notified when a candidate acceps or rejects an offer.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <fieldset>
                    <legend>Push Notification</legend>
                    <p className="text-start">
                      These are delivered via SMS to your mobile phone
                    </p>
                    <div>
                      <input
                        type="radio"
                        id="every-notification"
                        onChange={changeHandler}
                        name="notification"
                        checked={formData.notification == "Everything"}
                        value="Everything"
                      />
                      <label htmlFor="every-notification">Everything</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="email-notification"
                        onChange={changeHandler}
                        name="notification"
                        checked={formData.notification == "Same as email"}
                        value="Same as email"
                      />
                      <label htmlFor="email-notification">Same as email</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="no-notification"
                        onChange={changeHandler}
                        name="notification"
                        checked={
                          formData.notification == "No push notifications"
                        }
                        value="No push notifications"
                      />
                      <label htmlFor="no-notification">
                        No push notifications
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              className="bg-blue-700 px-6 py-2 text-white rounded-md hover:bg-opacity-50 "
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
