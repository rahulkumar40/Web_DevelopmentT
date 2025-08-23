import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
toast;
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function SForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const { color, serviceInquiryForm } = useContext(AppContext);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await serviceInquiryForm(data);
    } catch (err) {
      console.error("Error:");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      {/* 📋 Inquiry Form */}
      <div
        className={`${
          color ? `bg-gray-100 text-gray-700` : `bg-gray-900 text-gray-100`
        } p-6 rounded-lg shadow-md`}
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Fill out the form & let’s connect!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className={`block  font-medium`}>Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block  font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block  font-medium">Phone</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-2 border outline-none rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block  font-medium">Select Service</label>
            <select
              {...register("service", { required: "Please select a service" })}
              className={`w-full p-2 ${
                color ? `text-black` : `text-gray-900`
              } border rounded-md outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">-- Choose a Service --</option>
              <option value="school">School/College Promotions</option>
              <option value="branding">Personal Branding</option>
              <option value="political">Political Campaign Marketing</option>
              <option value="business">Business Growth Strategies</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {!isLoading ? (
              "Submit Inquiry"
            ) : (
              <div className="flex justify-center items-center">
                {" "}
                <div className="spinner bg-white  h-[1rem]"></div>
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SForm;
