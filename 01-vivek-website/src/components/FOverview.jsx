import React, { useContext } from "react";
import {
  FaUsers,
  FaEnvelope,
  FaBriefcase,
  FaTools,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import { AppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
const sections = [
  {
    id: 1,
    title: "User Management",
    icon: <FaUsers className="text-blue-500 text-4xl" />,
    description: "Manage users and their roles.",
    buttonText: "View Users",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    link: "/dashboard/all-user",
  },
  {
    id: 2,
    title: "Contact Messages",
    link: "/dashboard/user-contact",
    icon: <FaEnvelope className="text-green-500 text-4xl" />,
    description: "View and respond to user inquiries.",
    buttonText: "View Messages",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    id: 3,
    title: "Job Applications",
    link: "/dashboard/job-application",
    icon: <FaBriefcase className="text-orange-500 text-4xl" />,
    description: "Track and review job applications.",
    buttonText: "View Applications",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: 4,
    title: "Service Inquiries",
    link: "/dashboard/user-services",
    icon: <FaTools className="text-purple-500 text-4xl" />,
    description: "Handle service-related queries.",
    buttonText: "View Inquiries",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
  {
    id: 5,
    link: "/dashboard/",
    icon: <FaCog className="text-gray-500 text-4xl" />,
    description: "Configure system preferences.",
    buttonText: "Open Settings",
    buttonColor: "bg-gray-500 hover:bg-gray-600",
  },
];

const FOverview = () => {
  const { color } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen p-6 transition-all rounded-lg ${
        !color ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        📊 Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
              !color ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-md">
              {section.icon}
              <h3 className="text-2xl font-semibold">{section.title}</h3>
            </div>
            <p className="mt-3 text-lg">{section.description}</p>
            <button
              className={`mt-4 px-4 py-2 text-white rounded-lg ${section.buttonColor}`}
              onClick={() => navigate(`${section.link}`)}
            >
              {section.buttonText}
            </button>
            {/* <Link t0={`${section.link}`}>
                {section.link}
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FOverview;
