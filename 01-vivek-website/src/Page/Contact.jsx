import React, { useContext,useLayoutEffect } from "react";
import { MdAddCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/contact-us.jpg";
import InqueryForm from "../Component/contact/InqueryForm";
import { AppContext } from "../Context/AppContext";
import Footer from "../Component/Footer";
function Contact() {
    const {color} = useContext(AppContext)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location]);

  return (
    <>
      <div className="w-full h-full mt-1">
        <div className="w-11/12 max-w-[1160px] md:min-w-[87vw]  h-full mx-auto rounded-md ">
          {/* Contact page Hero section ..... */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex h-full w-full flex-col justify-center items-center relative gap-y-3 rounded-md"
          >
            <img
              className=" h-[275px] sm:h-[28rem] w-full bg-cover bg-center rounded-md"
              src={img}
              alt="img-here"
            />

            <div className="absolute top-0 left-0 text-black flex justify-center items-center h-full w-full flex-col ">
              <h2 className="font-bold text-center text-5xl uppercase ">
                Contact Us
              </h2>
              <p className=" text-2xl text-center">
                Connecting You to Us - Let's Start the Conversationt
              </p>
              <div className=" absolute bottom-5 left-6 mt-2 w-full md:right-0 md:bottom-5  ">
                <Link
                  className="bg-blue-600 py-3 px-3  mr-2  rounded-[20px] hover:text-white transition-all delay-200 duration-100 ease-in"
                  href="tel:+919528583220"
                >
                  Call +919528583220
                </Link>
                <Link
                  className="bg-green-600 py-3 px-5 text-white rounded-[20px] hover:text-gray-900 transition-all delay-200 duration-100 ease-in"
                  href="https://wa.me/7992483895"
                  rel="noopenernoreferrer"
                  target="_blank"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
          {/*  contact opption */}
          <div className={`grid sm:divide-y-0 grid-cols-1 sm:grid-cols-3 my-3 ${!color?`text-white divide-indigo-100`:`text-black divide-indigo-800 bg-gray-200`}  divide-y-2   gap-y-3 my-5 py-4 rounded-lg`}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.7, duration: 0.7 },
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <Link className="text-[1.4rem] font-semibold">Address</Link>
              <p className="text-center">Chhapraula, Gautam buddh Nagar</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.7 },
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-col items-center justify-center "
            >
              <Link
                className="text-[1.4rem] font-semibold"
                to={"mailto:erapost08@gmail.com"}
              >
                Mail
              </Link>
              <p className="text-center"> erapost08@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.7, duration: 0.7 },
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <Link
                className="text-[1.4rem] font-semibold flex items-center"
                to={"tel:+919528583220"}
              >
                Phone <MdAddCall className="ml-2" />
              </Link>
              <p>9528583220</p>
            </motion.div>
          </div>

        <h2 className={`${color?`text-gray-800`:`text-gray-400`} text-center text-3xl font-semibold mt-3`}>Send Your Message....</h2>
          <InqueryForm />
          {/* google map address of local address..  */}
          <div className={`max-w-full grid grid-cols-1 sm:grid-cols-2  w-auto sm:gap-y-2 my-6 ${color?`bg-gray-300 text-black`:`bg-gray-800`} px-4 py-3 rounded-lg`}>
            <p className={`w-full flex justify-center items-center text-center ${!color?`text-white`:`text-black`} mb-4`}>
            Sanskar Bhavan, Chhapraula, GT Road, Gautam Buddha Nagar, UP - 201009
            </p>
            <iframe
              className="w-full rounded-md lg:h-[18rem] h-[14rem] shadow-lg shadow-indigo-700 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14043.932105481954!2d77.46990841402528!3d28.619261366389424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceddba5233ab1%3A0x2ca5ad62c1df695!2sChhapraula%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1738684056460!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Contact;
