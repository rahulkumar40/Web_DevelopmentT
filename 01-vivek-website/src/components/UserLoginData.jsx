import React, { useState, useEffect, useCallback, useContext } from "react";
import { FaUser, FaEnvelope, FaIdBadge, FaKey } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import { AppContext } from "../Context/AppContext";

const UserLoginData = () => {
  const { color, allUserData, deleteUser } = useContext(AppContext);

  const deleted = async (email) => {
    try {
      await deleteUser({ email: email }); // Sending as { id }
    } catch (err) {
      console.log("err");
    }
  };

  const bgColor = color
    ? "bg-gradient-to-r from-blue-500 to-purple-600"
    : "bg-gradient-to-r from-gray-900 to-black";
  const cardBg = color ? "bg-white text-gray-800" : "bg-gray-800 text-white";
  const iconColor = color ? "text-blue-500" : "text-yellow-400";

  return (
    <div className="min-h-screen mx-auto bg-gradient-to-t rounded-lg from-blue-500 to-purple-500 p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
        User Information
      </h2>
      {allUserData ? (
        <div
          className={`grid w-full  lg:grid-cols-2 grid-cols-1 place-items-center px-2 gap-4 ${bgColor} py-8`}
        >
          {allUserData.user.map((user, idx) => (
            <div
              key={idx}
              className={`max-w-lg w-full  ${cardBg} shadow-lg rounded-lg p-6 transition-all duration-500 bg-gradient-to-tr from-transparent via-orange-600 to-transparent`}
            >
              {user ? (
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <FaUser className={`${iconColor} text-lg`} />
                    <strong>Account Type:</strong> {user.accountType}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaEnvelope className={`${iconColor} text-lg`} />
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaUser className={`${iconColor} text-lg`} />
                    <strong>First Name:</strong> {user.firstName}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaUser className={`${iconColor} text-lg`} />
                    <strong>Last Name:</strong> {user.lastName}
                  </p>
                  <p className="flex items-center gap-3">
                    <FaIdBadge className={`${iconColor} text-lg`} />
                    <strong>User ID:</strong> {user._id}
                  </p>
                  <div className="text-center">
                    <button
                      className="bg-red-500 text-white font-semibold px-3 py-2 rounded-lg hover:bg-red-600 transition"
                      onClick={() => deleted(user.email)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 text-center">
                  Loading user data...
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No Users data available.</p>
      )}
    </div>
  );
};

export default UserLoginData;
