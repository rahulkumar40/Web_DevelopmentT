import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../../Context/AppContext";
function InqueryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const [user, setUser] = useState(false);
  const { color, loading, contactForm } = useContext(AppContext);
  const onSubmit = async (data) => {
    try {
      await contactForm(data);
      reset();
    } catch (err) {
      toast.error("Invalid data or server error");
    }
  };
  return (
    <div className="bg-orange-200 px-9 py-5 rounded-lg mt-7">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-red-600 px-5 mb-10 bg-orange-400 rounded-md">
        <form action="" className="pb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 h-full gap-x-3 pb-4 text-[1.3rem] font-semibold">
            <div className="">
              <div className="flex flex-col gap-y-1 mt-2">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name "
                  className="px-3 py-2 w-full rounded-md focus:bg-white bg-gray-200"
                  name="name"
                  {...register("name")}
                />
              </div>
              <div className="flex flex-col gap-y-1 mt-2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 outline-none focus:ring-2 -none focus-outline-2 rounded-md focus:bg-white bg-gray-200"
                  name="email"
                  {...register("email")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1 mt-2">
              <label htmlFor="message">Message</label>
              <textarea
                className="h-[7rem] w-full px-4 py-1 md:h-full focus:bg-white bg-gray-200 rounded-md"
                placeholder="plesae type your message "
                name="message"
                {...register("message")}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="text-xl py-3 px-3 font-semibold border-[2px] w-[10rem] rounded-md hover:bg-white">
              {!loading ? (
                "Send"
              ) : (
                <div className="flex justify-center items-center">
                  {" "}
                  <div className="spinner bg-white  h-[1rem]"></div>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default InqueryForm;
