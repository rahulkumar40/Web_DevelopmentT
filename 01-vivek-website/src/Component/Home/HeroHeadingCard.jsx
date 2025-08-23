import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { motion } from "framer-motion";

function HeroHeadingCard({ data }) {
  const { color } = useContext(AppContext);

  return (
    <motion.div 
    >
      <div className={`absolute top-3 ${data.id === 1 ? "left-0" : "left-5"} h-full w-full`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`${data.id === 1 ? "flex flex-col items-center w-full justify-center" : "px-2"}`}
        >
          <h2
            className={`text-3xl ${color ? "text-blue-900" : ""} font-bold font-italic ${
              data.id === 1
                ? "font-extrabold text-center text-black sm:text-4xl text-3xl uppercase drop-shadow-lg"
                : ""
            }`}
          >
            {data.heading}
          </h2>
          <p className="text-2xl text-center max-w-[80%]">
            {data.subHeading && <span> {data.subHeading}</span>}
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className={`sm:ml-[3rem] ml-2 w-full ${data.id === 2 || data.id === 5 ? "text-black" : ""}`}
        >
          {data.feature &&
            data.feature.map((feature, index) => (
              <ul key={index} className="list-disc w-auto">
                <li className="w-auto">{feature}</li>
              </ul>
            ))}
        </motion.div>
        {data.id === 1 ? (
          <motion.a 
            href="#detailSection" 
            className="px-2 py-2 sm:block hidden"
            whileHover={{ scale: 1.01 }}
          >
            <button className="text-white px-4 py-2 ml-[4rem] border-2 border-sky-950 rounded-lg hover:border-blue-100 bg-transparent">
              Know More
            </button>
          </motion.a>
        ) : (
          <motion.button 
            className="ml-[4rem] hover:text-white bg-yellow-500 px-5 py-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <Link to={`service/${data.link}`}>Know More</Link>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export default HeroHeadingCard;