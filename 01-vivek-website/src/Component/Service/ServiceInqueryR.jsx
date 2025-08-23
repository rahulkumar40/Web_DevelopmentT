import React, { useContext, useLayoutEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import SForm from "./SForm";
import { AppContext } from "../../Context/AppContext";
// import InqueryForm from './InqueryForm';

function ServiceInqueryR() {
  const { tag, id } = useParams();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location]);
  const {color} = useContext(AppContext);
  const navigate = useNavigate();

  
  return (
    <div className={`max-w-3xl mx-auto p-6  shadow-lg rounded-lg transition-all ${color?`bg-gray-300`:`bg-gray-800`} min-h-screen`}>
      {/*  Back Button */}
      <button
        onClick={() => navigate(-1)}
        className={`flex items-center ${color?`text-black`:`text-orange-600`}  hover:text-blue-600 dark:hover:text-blue-400 transition mb-4`}
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      {/*  Heading */}
      <div className="text-center mb-6">
        <h1 className={`text-3xl font-bold ${color?`text-gray-800`:`text-gray-200`} `}>
          Get the Best Digital Marketing Services 
        </h1>
        <p className={`${color?`text-gray-600`:`text-gray-50`} mt-2`}>
          We provide top-notch digital marketing solutions for schools,
          businesses, personal branding, and political campaigns.
        </p>
      </div>

      {/*  Inquiry Form Section */}
      <div className="mb-6">
        <SForm />
      </div>
      {/*  Contact Options */}
      <div className="text-center mt-6">
        <p className={`text-lg font-medium ${color?`text-gray-700`:`text-gray-200`}  mb-3`}>
          Contact Us
        </p>
        <div className="flex justify-center gap-4">
          {/* Call Button */}
          <a
            className="flex items-center gap-2 bg-blue-600 py-3 px-5 text-white rounded-full hover:bg-orange-700 transition transform hover:scale-105"
            href="tel:+919528583220"
          >
            <FaPhoneAlt /> Call Now
          </a>

          {/*  WhatsApp Chat */}
          <a
            className="flex items-center gap-2 bg-green-600 py-3 px-5 text-white rounded-full hover:bg-green-800 transition transform hover:scale-105"
            href="https://wa.me/9528583220"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
      {/*  Services Section */}
      <div className={`mt-8 p-4 ${color?`text-gray-700 bg-white`:`bg-black text-gray-50`} rounded-lg text-center shadow-md`}>
        <h2 className="text-2xl font-semibold ">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ">
          <Link className="flex items-center gap-2" to={"/services"}>
            <FaCheckCircle className="text-green-500" /> School/College
            Promotions
          </Link>
          <Link className="flex items-center gap-2" to="/services">
            <FaCheckCircle className="text-green-500" /> Personal Branding
          </Link>
          <Link className="flex items-center gap-2" to="/services">
            <FaCheckCircle className="text-green-500" /> Political Campaign
            Marketing
          </Link>
          <Link to="/service" className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Business Growth
            Strategies
          </Link>
        </div>
      </div>

      {/*  Why Choose Section */}
      <div className={`mt-8 p-4 ${color?`text-gray-700 bg-white`:`bg-black text-gray-50`} rounded-lg text-center shadow-md`}>
        <h2 className="text-xl font-semibold ">
          Why Choose Us?
        </h2>
        <p className="mt-2">
          ✅ Expert Digital Marketing Team ✅ Affordable & Customized Plans ✅
          Proven Results & Client Satisfaction ✅ 24/7 Support & Guidance
        </p>
      </div>
    </div>
  );
}

export default ServiceInqueryR;
