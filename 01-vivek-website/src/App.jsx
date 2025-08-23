import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Home from "./Page/Home";
import Career from "./Page/Career";
import Service from "./Page/Service";
import Contact from "./Page/Contact";
import About from "./Page/About";
import PageNotFound from "./Page/PageNotFound";
import Signup from "./Page/Signup";
import Login from "./Page/Login";
import ForgetPassword from "./Page/ForgetPassword";
import ChangePassword from "./Page/ChangePassword";
import NavBarO from "./Component/NavBarO";
import Profile from "./Page/Profile";
import ServiceInquery from "./Component/contact/ServiceInquery";
import ServiceInqueryR from "./Component/Service/ServiceInqueryR";

import Dashboard from "./components/Dashboard";
import FOverview from "./components/FOverview";
import UserLoginData from "./components/UserLoginData";
import JobApplication from "./components/JobApplication";
import GetAllServiceInquiry from "./components/GetAllServiceInquiry";
import GetAllContactMessage from "./components/GetAllContactMessage";

function App() {
  const { color, user } = useContext(AppContext);
  return (
    <div
      className={` h-full w-full my-0 p-0 relative ${
        !color ? `bg-black ` : `bg-white`
      } `}
    >
      <NavBarO />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:tag" element={<Service />} />
        {/* <Route path="/service/:serviceId" element={<ServiceInquery/>} /> */}
        <Route
          path="/service/:tag/:id/service-form"
          element={<ServiceInqueryR />}
        />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} /> {/* Fixed spelling */}
        <Route path="/login" element={<Login />} />
        <Route path="/frogetPassword" element={<ForgetPassword />} />{" "}
        {/* Fixed spelling */}
        <Route path="/changePassword" element={<ChangePassword />} />{" "}
        <Route path="/:jobTitle/job-application" element={<ServiceInquery />} />{" "}
        {/* Fixed spelling */}
        <Route path="/profile" element={<Profile />} /> {/* Fixed spelling */}
        <Route path="*" element={<PageNotFound />} />
        {/* deshboard  */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<FOverview />} />
          <Route path="all-user" element={<UserLoginData />} />
          <Route path="job-application" element={<JobApplication />} />
          <Route path="user-services" element={<GetAllServiceInquiry />} />
          <Route path="user-contact" element={<GetAllContactMessage />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
      <button className="text-green-500 fixed right-3 bottom-[5rem] font-bold md:text-[5rem] text-[3rem]">
        <Link to="https://wa.me/9528583220" target="_blank">
          <div></div>
          <FaWhatsapp />
        </Link>
      </button>
    </div>
  );
}

export default App;
