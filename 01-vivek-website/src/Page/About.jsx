import React, { useEffect, useContext, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import aboutData from "../assets/aboutStore/about.js";
import memberData from "../assets/aboutStore/memberData.js";
import about from "../assets/about-us.jpg";
import AboutCar from "../Component/AboutCar.jsx";
import { AppContext } from "../Context/AppContext.jsx";
import TestimonialOfUM from "../Component/Home/TestimonialOfUM.jsx";
import Footer from "../Component/Footer.jsx";

function About() {
  const { color } = useContext(AppContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full mt-[0.1rem] mb-4">
      <div className="w-11/12 md:min-w-[87vw] max-w-[1160px] h-full mx-auto rounded-md">
        {/* Hero Section */}
        <motion.div
          //   transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex md:h-[28rem] w-full flex-col justify-center items-center bg-gray-800 gap-y-3 rounded-md object-cover overflow-hidden"
        >
          {/* Hero Image */}
          <img
            src={about}
            alt="image"
            loading="lazy"
            className="w-full md:h-[28rem]  object-cover transition-all duration-[0.3s]"
          />
          {/* Hero Text */}
          <div
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute text-center"
          >
            <motion.h2
              className="font-bold text-gray-800 text-5xl uppercase stroke-green-600"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.6 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-blue-800 text-2xl px-2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.7 },
              }}
              viewport={{ once: false, amount: 0.7 }}
            >
              Empowering Political Campaigns with Innovation and Strategy
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className={`flex mt-1 w-auto md:flex-row flex-wrap mx-auto ${
            color
              ? `text-black bg-gradient-to-r from-neutral-100 to-stone-200`
              : `text-white bg-gradient-to-r from-slate-900 to-slate-700`
          }`}
        >
          <AboutCar datas={aboutData} />

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="w-full text-4xl text-center h-[5rem] bg-gradient-to-r from-blue-500 to-orange-500 font-bold text-black flex justify-center items-center">
              Team Member
            </h2>
            <TestimonialOfUM datas={memberData} />
          </motion.div>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}

export default About;
