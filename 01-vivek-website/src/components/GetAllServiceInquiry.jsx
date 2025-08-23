import React, { useContext, useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const GetAllServiceInquiry = () => {
  const { deleteServiceData, serviceData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (serviceData) {
      setLoading(false);
    } else {
      console.log("Service form data not available...");
    }
  }, [serviceData]);

  const deleted = async (_id) => {
    try {
      await deleteServiceData({ id: _id });
    } catch (err) {
      toast.error("Invalid data or server error");
    }
  };

  return (
    <div className="min-h-screen rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className=" p-5 rounded-2xl shadow-xl w-full">
        <h2 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
          📩 Service Inquiries
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading inquiries...</p>
        ) : serviceData?.data?.inquiries?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
            {serviceData.data.inquiries.map((data) => (
              <motion.div
                key={data._id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-4 rounded-lg bg-gradient-to-br to-orange-600 via-gray-50 from-blue-600 p-4 shadow-lg"
              >
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <FaUser className="text-blue-600" />
                  <span className="text-gray-100 font-bold text-xl">
                    {data.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <FaEnvelope className="text-red-500 text-xl" />
                  <p className="text-gray-700 font-medium">{data.email}</p>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <FaPhone className="text-green-500" />
                  <span className="text-gray-700 font-medium">
                    {data.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <FaBriefcase className="text-yellow-500" />
                  <span className="text-gray-700 font-medium">
                    {data.service}
                  </span>
                </div>
                <div className="text-center">
                  <button
                    className="bg-red-500 text-white font-semibold px-3 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => deleted(data._id)}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No service inquiry data available.
          </p>
        )}
      </div>
    </div>
  );
};

export default GetAllServiceInquiry;
