import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";
import whyChoose from "../../assets/careerStore/whyChoose";
import jobSection from "../../assets/careerStore/jobSection";
import { Link } from "react-router-dom";

function CareerMain() {
  const { color } = useContext(AppContext);

  return (
    <div>
      {/* Why Join Us Section */}
      <section className="w-11/12 max-w-[1160px] mx-auto mt-16 text-center">
        <h3 className="text-4xl font-extrabold text-orange-500 mb-8">
          Why Join ERA Post?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChoose.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg shadow-xl ${
                color ? "bg-white text-gray-800" : "bg-gray-800 text-white"
              } transition-all duration-300`}
            >
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
      <section
        className="w-11/12 max-w-[1160px] mx-auto mt-16"
        id="explore-career"
      >
        <h3 className="text-4xl font-extrabold text-orange-500 text-center mb-8">
          Current Openings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobSection.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg shadow-xl ${
                color ? "bg-white text-gray-800" : "bg-gray-800 text-white"
              } transition-all duration-300`}
            >
              <h4 className="text-2xl  font-semibold mb-2">{job.title}</h4>
              <p className="text-gray-500 mb-3">{job.desc}</p>
              
              {/* Fixed Link Inside Motion Div */}
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to={`/${job.title}/job-application`}
                  className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
                >
                  Apply Now
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default CareerMain;
