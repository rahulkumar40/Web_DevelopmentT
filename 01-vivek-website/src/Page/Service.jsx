import { useContext,useLayoutEffect, useState } from "react";
import { AppContext } from "../Context/AppContext.jsx";
import Footer from "../Component/Footer.jsx";
import ServiceMain from "../Component/Service/ServiceMain.jsx";
import { motion } from "framer-motion";

function Service() {
  const { color } = useContext(AppContext);
   useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [window.location]);
  return (
    <div className={`w-full h-full mt-[0.1rem] ${!color ? `bg-black text-white` : `bg-white text-black`}`}>  
      <div className="w-11/12 max-w-[1160px] md:min-w-[87vw] h-full mx-auto rounded-md">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex h-[25rem] w-full flex-col justify-center items-center gap-y-5 bg-gradient-to-r from-purple-700 to-blue-500 text-white text-center rounded-lg shadow-lg relative"
        >
          <h2 className="font-extrabold sm:text-6xl uppercase drop-shadow-lg text-5xl">Transform Your Digital Presence</h2>
          <p className="text-2xl max-w-[80%]">Expert digital marketing solutions for businesses, political campaigns, and personal brands.</p>
        </motion.div>   
        <ServiceMain />
        <Footer />
      </div>
    </div>
  );
}

export default Service;
