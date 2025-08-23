import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIdBadge,
  FaCommentDots,
} from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const JobApplication = () => {
  const { color, deleteCareerData, allCareerData } = useContext(AppContext);

  const deleted = async (emailId) => {
    try {
      await deleteCareerData({ email: emailId });
    } catch (err) {
      toast.error("Invalid data or server error");
    }
  };

  const bgColor = color
    ? "bg-gradient-to-r from-blue-500 to-purple-600"
    : "bg-gradient-to-r from-gray-900 to-black";
  const cardBg = color ? "bg-white text-gray-800" : "bg-gray-800 text-white";
  const iconColor = color ? "text-blue-500" : "text-yellow-400";

  return (
    <div className={`min-h-screen rounded-lg ${bgColor} p-6`}>
      <Toaster position="top-center" reverseOrder={false} />
      <motion.h2
        className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Job Applications
      </motion.h2>

      {allCareerData && allCareerData.data.careerForms.length > 0 ? (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
          {allCareerData.data.careerForms.map((user ) => (
            <motion.div
              key={user._id}
              className={`max-w-lg w-full h-full ${cardBg} shadow-xl rounded-lg p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-lg">
                  <FaUser className={`${iconColor} text-xl`} />
                  <strong>Name:</strong> {user.name}
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <FaEnvelope className={`${iconColor} text-xl`} />
                  <strong>Email:</strong> {user.emailId}
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <FaPhone className={`${iconColor} text-xl`} />
                  <strong>Phone:</strong> {user.phoneNumber}
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <FaIdBadge className={`${iconColor} text-xl`} />
                  <strong>User ID:</strong> {user._id}
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <FaCommentDots className="text-green-500 text-3xl" />
                  <strong>Message:</strong> {user.message}
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    to={user.resumeUrl}
                    target="_blank"
                    className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                  >
                    View Resume
                  </Link>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="px-4 py-2 text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    onClick={() => deleted(user.emailId)}
                  >
                    Delete Application
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          className="text-center text-white text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          No career applications available.
        </motion.p>
      )}
    </div>
  );
};

export default JobApplication;
