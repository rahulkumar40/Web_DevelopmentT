import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../../Context/AppContext";
const jobRoles = [
  "Software Engineer",
  "Developer",
  "Digital Marketer",
  "Business Development",
  "Customer Service",
  "Sales",
];
function CareerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    submitCareerForm,
    fileInputRef,
    selectedFile,
    setSelectedFile,
    loading,
  } = useContext(AppContext);

  const onSubmitF = async (data) => {
    try{
        await submitCareerForm(data, reset);
    }
    catch{
        console.log("Try ......")
    }
  };
  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gradient-to-t to-rose-500 from-teal-500 text-black shadow-lg rounded-lg border">
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Apply for a Job
      </h2>
      <form onSubmit={handleSubmit(onSubmitF)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", { required: "Full Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("emailId", { required: "Email is required" })}
          />
          {errors.emailId && (
            <p className="text-red-500 text-sm">{errors.emailId.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>
        {/* Job Role Dropdown */}
        <div>
          <label className="block font-semibold">Select Job Role</label>
          <select
            {...register("jobTitle", { required: "Job role is required" })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a job role</option>
            {jobRoles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.jobRole && (
            <p className="text-red-500 text-sm">{errors.jobRole.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            placeholder="Type your message"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block font-semibold">Upload Resume (PDF/DOC)</label>
          <input
            ref={fileInputRef}
            type="file"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept=".pdf,.doc,.docx"
            {...register("resume", { required: "Resume is required" })}
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setSelectedFile(e.target.files[0].name); // ✅ Display file name
              } else {
                setSelectedFile(null);
              }
            }}
          />
          {selectedFile && (
            <p className="text-green-600 text-sm">File: {selectedFile}</p>
          )}
          {errors.resume && (
            <p className="text-red-500 text-sm">{errors.resume.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {!loading ? (
            "Submit Application"
          ) : (
            <div className="flex justify-center items-center">
              {" "}
              <div className="spinner bg-white  h-[1rem]"></div>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}

export default CareerForm;
