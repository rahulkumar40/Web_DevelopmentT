import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import {
  FaUserShield,
  FaSignOutAlt,
  FaLock,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import img from "../assets/logo1.png";

function Profile() {
  const { user, logout, isAdminVerified, setIsAdminVerified } =
    useContext(AppContext);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const ADMIN_SECRET_KEY = "12"; // Set your secret admin key here

  useEffect(() => {
    if (user) {
      const firstName = user.firstName || "User";
      const lastName = user.lastName || "";
      const formattedName = `${firstName} ${lastName}`.trim();
      const avatar = `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
        formattedName
      )}`;
      setAvatarUrl(avatar);
    }
  }, [user]);
  const handleAdminAccess = () => {
    if (adminKey === ADMIN_SECRET_KEY) {
      setIsAdminVerified(true);
      toast.success("Admin access granted!");
    } else {
      toast.error("Access Denied ❌");
      setAdminKey("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        {user ? (
          <>
            {/* Profile Section */}
            <div className="flex flex-col items-center">
              <img
                src={avatarUrl}
                alt="Profile Avatar"
                className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
              />
              <h2 className="text-2xl font-bold mt-3 text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-500">{user.email}</p>
              <span
                className={`px-3 py-1 rounded-full text-sm mt-2 flex items-center gap-1 ${
                  user.accountType === "Admin"
                    ? "bg-red-200 text-red-700"
                    : "bg-green-200 text-green-700"
                }`}
              >
                <FaUserShield
                  className={
                    user.accountType === "admin"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                />{" "}
                {user.accountType}
              </span>
            </div>

            {/* Slogan Section */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-700">
                🚀 Empower Your Digital Identity
              </h3>
              <p className="text-gray-500 text-sm">
                Unlock new possibilities with our secure and dynamic platform.
              </p>
            </div>

            {/* Account Info */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between bg-gray-100 p-3 rounded">
                <span className="font-medium text-gray-700">Account Type:</span>
                <span className="text-gray-900">
                  {user.accountType === "admin"
                    ? "Administrator"
                    : "Standard User"}
                </span>
              </div>
              <div className="flex justify-between bg-gray-100 p-3 rounded">
                <span className="font-medium text-gray-700">Services:</span>
                <span className="text-gray-900">
                  {user.service || "Basic Access"}
                </span>
              </div>

              {/* Admin Verification */}
              {user.accountType === "Admin" && !isAdminVerified && (
                <div className="bg-gray-100 p-4 rounded text-center shadow-md mt-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    🔑 Admin Access Required
                  </h3>
                  <div className="relative flex items-center justify-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Admin Key"
                      className="border border-gray-300 px-3 py-2 rounded w-full pr-10"
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                    />
                    <button
                      className="absolute right-3 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <button
                    onClick={handleAdminAccess}
                    className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 shadow-md w-full"
                  >
                    Verify Admin Access
                  </button>
                </div>
              )}

              {/* Admin Dashboard Link */}
              {user.role === "admin" && isAdminVerified && (
                <div className="bg-green-100 p-3 rounded shadow-md text-center mt-4">
                  <h3 className="text-lg font-semibold text-green-700">
                    ✅ Admin Verified
                  </h3>
                  <Link
                    to="/dashboard"
                    className="text-green-700 font-semibold flex justify-center items-center gap-2 mt-2"
                  >
                    <FaCheckCircle /> Go to Dashboard
                  </Link>
                </div>
              )}
            </div>

            {user.accountType === "Admin" && isAdminVerified && (
              <div className="bg-blue-100 p-4 rounded shadow-md text-center mt-4">
                <h3 className="text-lg font-semibold text-blue-700">
                  🎯 Admin Dashboard
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage users, settings, and data from your dashboard.
                </p>
                <Link
                  to="/dashboard"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md flex justify-center items-center gap-2 mt-2"
                >
                  <FaCheckCircle /> Go to Dashboard
                </Link>
              </div>
            )}
            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <Link
                to="/changePassword"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow-md flex items-center gap-2"
              >
                <FaLock /> Change Password
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 shadow-md flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-6">
            <img src={img} alt="Login" className="w-24 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome to Our Platform!
            </h2>
            <p className="text-gray-600 mt-2">
              Join us to access exclusive features and personalized services.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
