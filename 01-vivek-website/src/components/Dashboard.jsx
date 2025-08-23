import React, { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import {
  FaUsers,
  FaBriefcase,
  FaEnvelope,
  FaTasks,
  FaChartPie,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const {
    user,
    color,
    isAdminVerified,
    getServiceInquiryData,
    getAllUser,
    getContactPageData,
    getCareerData,
  } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.accountType !== "Admin" || !isAdminVerified) {
      navigate("/profile");
    }
  }, [user, isAdminVerified, navigate]);

  return (
    <div className={`h-full w-full mt-[0.1rem] ${color ? "bg-gray-100" : "bg-gray-900 text-white"}`} id="who-we-are">
      <div className="w-11/12 max-w-[1260px] md:min-w-[87vw] mx-auto">
        <div className={`min-h-screen p-8 transition-all duration-300`}>
          {/* Welcome Message */}
          <div className={`max-w-7xl mx-auto ${color ? "bg-white" : "bg-gray-800"} shadow-xl rounded-xl p-8 transition-all duration-300`}>
            <h1 className={`text-4xl font-extrabold mb-3 ${color ? "text-gray-900" : "text-gray-200"}`}>
              Admin Dashboard
            </h1>
            <p className="text-gray-500 text-lg">
              Manage users, settings, and analytics effectively.
            </p>

            {/* Dashboard Navigation */}
            <nav className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <DashboardLink to="/dashboard/overview" text="Overview" icon={<FaChartPie />} colorClass="text-blue-600" />
              <DashboardLink to="/dashboard/all-user" text=" Users Info" icon={<FaUsers />} colorClass="text-green-600" onClick={getAllUser} />
              <DashboardLink to="/dashboard/job-application" text="Job Applications" icon={<FaBriefcase />} colorClass="text-purple-600" onClick={getCareerData} />
              <DashboardLink to="/dashboard/user-services" text="Services Inquiry" icon={<FaTasks />} colorClass="text-red-600" onClick={getServiceInquiryData} />
              <DashboardLink to="/dashboard/user-contact" text="Contact Requests" icon={<FaEnvelope />} colorClass="text-orange-600" onClick={getContactPageData} />
              <DashboardLink to="/profile" text="Logout" icon={<FaSignOutAlt />} colorClass="text-white bg-red-600 hover:bg-red-700" />
            </nav>

            <div className="mt-8 px-4 py-6 bg-transparent border rounded-xl shadow-lg transition-all duration-300">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Dashboard Link Component for cleaner code
const DashboardLink = ({ to, text, icon, colorClass, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between gap-3 p-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out`}
    >
      {text}
      <span className={colorClass}>{icon}</span>
    </Link>
  );
};

export default Dashboard;
