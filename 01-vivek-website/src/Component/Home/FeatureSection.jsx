import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function FeatureSection({ datas }) {
  const { color } = useContext(AppContext);

  return (
    <motion.div
      className={`w-full mx-auto p-5 rounded-lg ${
        color ? "bg-white" : "bg-gray-800"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* About Section */}
      <motion.div
        id="detailSection"
        className={`p-6 w-full rounded-lg shadow-lg mb-10 ${
          color ? "bg-gray-200" : "bg-gray-900"
        }`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-3xl font-bold">
          {datas.aboutSection.title}
        </h2>
        <p className={`text-center text-xl mt-3 ${color ? "text-black" : "text-gray-300"}`}>
          {datas.aboutSection.description}
        </p>
        <ul className="mt-4 list-disc pl-10">
          {datas.aboutSection.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className={`mb-1 ${color ? "text-black" : "text-gray-300"}`}
              whileHover={{ scale: 1.01 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className={`p-6 rounded-lg shadow-lg mb-10 ${
          color ? "bg-gray-200" : "bg-gray-900"
        }`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-center text-3xl font-bold">
          {datas.whyChooseUs.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {datas.whyChooseUs.points.map((point, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col items-center w-60 p-4 shadow-md rounded-md ${
                color ? "bg-white" : "bg-gray-600"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/service">
                <point.icon className="text-orange-400 text-5xl hover:text-blue-400" />
              </Link>
              <p className={`text-center mt-2 ${color ? "text-black" : "text-white"}`}>
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className={`p-6 rounded-lg shadow-lg ${
          color ? "bg-gray-200" : "bg-gray-900"
        }`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className={`text-center text-3xl font-bold ${color ? "text-black" : "text-white"}`}>
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {datas.servicesSection.map((service) => (
            <motion.div
              key={service.id}
              className={`w-64 p-4 shadow-md rounded-md text-center ${
                color ? "bg-white" : "bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/service">
                <service.icon className="text-blue-500 text-5xl mx-auto hover:text-orange-400" />
                <h3 className={`text-xl font-semibold mt-2 ${color ? "text-blue-600" : "text-white"}`}>
                  {service.service}
                </h3>
              </Link>
              <p className={`${color ? "text-black" : "text-gray-200"} mt-2`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FeatureSection;
