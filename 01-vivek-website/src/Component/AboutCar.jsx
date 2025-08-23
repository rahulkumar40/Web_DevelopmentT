import React from "react";
import { motion } from "framer-motion";

function AboutCar({ datas }) {
  return (
    <div className="w-full mx-1">
      {datas.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className={`${
            data.id % 2 !== 0 ? `flex justify-start` : `flex justify-end`
          } mx-auto max-w-[1000px] gap-y-4`}
        >
          <div className="flex justify-center items-center flex-col my-2 gap-x-2">
            {/* Heading Animation */}
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="text-center text-2xl font-semibold mt-2 text-orange-500"
            >
              {data.title}
            </motion.h2>

            <div
              className={`w-auto justify-center items-center flex gap-y-2 ${
                data.id % 2 !== 0
                  ? `sm:flex-row-reverse flex-col`
                  : `sm:flex-row flex-col`
              } `}
            >
              {/* Image Animation */}
              <motion.img
                initial={{ x: data.id % 2 !== 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
                className="h-[13rem] w-full sm:h-[10rem] md:w-auto rounded-md mx-3"
                src={data.image}
                alt="image-here"
                loading="lazy"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
                className="md:w-[450px] text-justify px-2"
              >
                {data.desc}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default AboutCar;
