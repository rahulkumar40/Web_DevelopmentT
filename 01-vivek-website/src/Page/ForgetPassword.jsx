import React from 'react'
import { useState,useLayoutEffect } from "react";
import { Link } from "react-router-dom";
function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [window.location]);
    const handleReset = () => {
      if (!email.includes("@")) {
        setMessage("Please enter a valid email address.");
        return;
      }
      setMessage("A password reset link has been sent to your email.");
      setEmail(""); // Clear input after sending request
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-[90%] max-w-[400px] bg-gray-800 p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password?</h2>
        <p className="text-sm text-gray-400 text-center mb-4">
          Enter your email and we'll send you a link to reset your password.
        </p>
        
        {message && (
          <p className="text-green-400 text-sm text-center mb-3">{message}</p>
        )}

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 rounded-md text-black focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
          onClick={handleReset}
        >
          Send Reset Link
        </button>

        <p className="text-sm mt-4 text-center">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgetPassword