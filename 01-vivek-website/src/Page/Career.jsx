import { motion } from "framer-motion";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import CareerForm from "../Component/UserLogSignCareer/CareerForm";
import Footer from "../Component/Footer";
import careerbanner from "./../assets/career-banner.webp";
import { AppContext } from "../Context/AppContext";
import CareerMain from "../Component/UserLogSignCareer/CareerMain";

function Career() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location]);
  const { color } = useContext(AppContext);

  return (
    <div
      className={`w-full min-h-screen ${
        color
          ? "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-black"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
      } transition-all duration-500`}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex h-[28rem] w-full flex-col justify-center items-center bg-cover bg-center bg-no-repeat rounded-b-xl shadow-xl mt-[0.1rem]"
        style={{ backgroundImage: ` url(${careerbanner})` }}
      >
        <div
          className={`absolute inset-0 ${
            color ? "" : "bg-black/50"
          } rounded-b-xl`}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <p
            className={`text-xl font-light ${
              color ? "text-gray-100" : "text-gray-300"
            }`}
          >
            Start your career in
          </p>
          <h2 className="font-extrabold text-6xl uppercase text-orange-500 drop-shadow-lg">
            ERA Post
          </h2>
          <p className="mt-3 text-lg text-gray-100">
            We are the people who dream and do.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
          >
            <a href="#explore-career">Explore Openings</a>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Why Join Us Section */}
      <div id="#explore-career">
        <CareerMain />
      </div>
      {/* Career Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-600 mx-8 p-6 rounded-lg mt-16 shadow-xl"
      >
        <CareerForm />
      </motion.div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Career;
