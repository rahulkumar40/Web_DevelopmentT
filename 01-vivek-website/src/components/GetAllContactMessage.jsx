import React, { useContext, useEffect } from "react";
import { FaUser, FaEnvelope, FaIdBadge, FaCommentDots } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const GetAllContactMessage = () => {
  const { deleteContactRequest, color, contactData } = useContext(AppContext);

  const deleted = async (_id) => {
    try {
      await deleteContactRequest({ id: _id });
    } catch (err) {
      toast.error("Invalid data or server error");
    }
  };

  return (
    <div className={`min-h-screen rounded-lg p-6 ${color ? "bg-gray-100" : "bg-gray-900"}`}>
      <Toaster position="top-center" reverseOrder={false} />
      <motion.h2 
        className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📩 Contact Messages 📩
      </motion.h2>

      {contactData && contactData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactData.map((data) => (
            <motion.div
              key={data._id}
              className={`p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                color ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-sm font-medium">
                  <FaIdBadge className="text-gray-600 text-lg" /> ID: {data._id || "N/A"}
                </p>
                <p className="flex items-center gap-3 text-lg font-semibold">
                  <FaUser className="text-blue-600 text-xl" /> {data.name}
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <FaEnvelope className="text-red-500 text-xl" /> {data.email}
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <FaCommentDots className="text-green-500 text-xl" /> {data.message}
                </p>
                <div className="text-center mt-4">
                  <button
                    className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => deleted(data._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p 
          className="text-center text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          No contact messages available.
        </motion.p>
      )}
    </div>
  );
};

export default GetAllContactMessage;
