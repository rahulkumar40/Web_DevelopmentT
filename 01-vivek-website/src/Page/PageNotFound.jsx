import React from "react";
import { TbError404 } from "react-icons/tb";
import { FaSpaceShuttle, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  
  function clickHadler() {
    navigate("/");
  }

  return (
    <div className="w-full bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 h-screen flex justify-center items-center p-6">
      <div className="text-center text-white flex flex-col justify-center items-center gap-6 max-w-2xl mx-auto">
        <div className="relative">
          {/* Error Icon with animation */}
          <p className="text-9xl animate-bounce">
            <TbError404 />
          </p>
          <p className="text-5xl mt-4 font-semibold">Page Not Found</p>
        </div>
        
        <div className="text-2xl font-light mt-4">
          <p className="flex gap-x-2 items-center justify-center">
            Oops! You seem to be lost in space{" "}
            <FaSpaceShuttle className="text-red-500 animate-pulse" />
          </p>
          <p className="mt-2">
            Don’t worry, let’s get you back on track!
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button
            className="flex items-center justify-center w-48 rounded-lg px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-xl transition-all duration-300 transform hover:scale-105"
            onClick={clickHadler}
          >
            <FaHome className="mr-2" />
            Go Home
          </button>
        </div>

        {/* Optional: Add a subtle footer */}
        <footer className="text-sm text-gray-200 mt-10">
          <p>404 Error Page | Your Company Name</p>
        </footer>
      </div>
    </div>
  );
}

export default PageNotFound;
