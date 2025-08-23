import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/AppContext";

function TestimonialOfUM({ datas }) {
  const { color } = useContext(AppContext);

  return (
    <div className="mx-auto">
      <div
        className={`${
          color ? "bg-gray-200" : "bg-gray-900"
        } rounded-b-md px-6 py-4`}
      >
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 "
        >
          {datas.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`px-4 py-4 rounded-md mb-2 shadow-md ${
                !color
                  ? "bg-gray-600 bg-opacity-45 text-white shadow-indigo-400"
                  : "bg-gray-50 text-black"
              }`}
            >
              <div className="flex flex-col items-center">
                {/* User Image */} 
              { data.image &&  <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-32 w-32 rounded-full p-1 bg-gradient-to-r from-fuchsia-500 via-amber-400 to-orange-500"
                  src={data.image}
                  alt={data.name}
                />}
                { data.icon && 
                    <button className="rounded-full bg-blue-600 p-1">
                        <data.icon className="text-4xl"/>
                    </button>

                        
                }
                <p className="font-semibold text-xl px-2 mt-3">{data.name}</p>
                <p className="text-sm text-center text-gray-400 sm:h-[2.5rem] h-auto">
                  {data.position}
                </p>
                <p className="text-justify px-2">{data.feedback}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialOfUM;
