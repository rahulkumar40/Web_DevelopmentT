import React, { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const url = "http://localhost:3000";
export const AppContext = createContext();
import { jwtDecode } from "jwt-decode";
export default function AppContextProvider({ children }) {
  const [color, setColor] = useState(true);
  const [serviceRoute, setServiceRoute] = useState(null);
  const [showTwo, setShowTwo] = useState(false);
  const [showOne, setShowOne] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAdminVerified, setIsAdminVerified] = useState(false);
  const [serviceData, setServiceData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [allCareerData, setAllCareerData] = useState(null);
  const [allUserData, setAllUserData] = useState(null);
  // Load user from localStorage on app start

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Set user from localStorage if it exists
    }
  }, []);
  const getToken = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser?.token) return savedUser.token;

    const cookieToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    return cookieToken || null;
  };
  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const expiryTime = decodedToken.exp * 1000;
        const currentTime = Date.now();
        const timeLeft = expiryTime - currentTime;

        if (timeLeft > 0) {
          //   console.log(
          //     `Token expires in ${Math.round(timeLeft / 1000)} seconds`
          //   );

          // Set timeout to log out exactly when token expires
          const timeoutId = setTimeout(() => {
            // console.log("Token expired! Logging out...");
            logout();
          }, timeLeft);

          return () => clearTimeout(timeoutId);
        } else {
          //   console.log("Token already expired! Logging out...");
          logout();
        }
      } catch (error) {
        // console.error("Invalid token! Logging out...");
        logout();
      }
    } else {
      //   console.log("No token found! Logging out...");
      logout();
    }
  }, [user]);

  // Login function
  const login = async (credentials) => {
    try {
      setLoading(true);
      const res = await axios.post(`${url}/api/v1/login`, credentials, {
        withCredentials: true, // Ensures cookies are sent
      });
      if (res.data.success) {
        const { token, userDetail } = res.data;
        setUser(userDetail || null);
        localStorage.setItem("user", JSON.stringify(userDetail));
        toast.success(res.data.messge || "Login !");
      } else {
        toast.error(res.data.message || "Login failed !");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Cheack Network || Server Problem"
      );
    } finally {
      setLoading(false);
    }
  };
  // Signup function
  const signup = async (userData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${url}/api/v1/signUp`, userData, {
        withCredentials: true,
      });
      if (res.data.success) {
        setUser(null);
        toast.success(res.data.message || "Account created successfully!");
      } else {
        toast.error(res.data.message || "Signup failed! Please try again.");
      }
    } catch (err) {
      if (err.response) {
        const errorMessage =
          err.response.data.message ||
          "Signup failed! Please check your inputs.";
        toast.error(errorMessage);
      } else if (err.request) {
        toast.error("Network Problem! Please try again later.");
      } else {
        toast.error("An unexpected error occurred: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/v1/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message || "Logout !");
      } else {
        toast.error(res.data.message || "Logout failed! Please try again.");
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  // change password function
  const changePassword = async (data) => {
    try {
      setLoading(true); // Start loading
      const res = await axios.post(
        `${url}/api/v1/changePasword`,
        data, // Send password data
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Password changed !");
      } else {
        toast.error(res.data.message || "Password change failed! Try again.");
      }
    } catch (err) {
      console.error("Axios Error:", err);

      if (err.response) {
        toast.error(err.response.data.message || "Invalid request!");
      } else if (err.request) {
        toast.error("No response from server. Check your network.");
      } else {
        toast.error("An error occurred while sending the request.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // get all user
  const getAllUser = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/v1/allUser`, {
        withCredentials: true, // Ensures cookies are sent
        headers: { "Content-Type": "application/json" },
      });
      setAllUserData(res.data);
      if (res.data.success) {
        toast.success(res.data.message || "Data fetched!");
      } else {
        toast.error(res.data.message || "Data fetching failed ! Try Again");
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  // delete user function
  const deleteUser = async (data) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${url}/api/v1/deleteUser`, {
        data: data,
        withCredentials: true,
      });

      if (res.data?.success) {
        getAllUser();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Deleting failed! Try Again");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // contact page, contact form function
  const contactForm = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(`${url}/api/v1/mailSend`, data, {
        withCredentials: true,
      });
      if (res.data && res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error("Something went wrong !");
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Server Error");
      } else if (err.request) {
        toast.error("No response from server. Check your network.");
      } else {
        toast.error("An error occurred while sending the request.");
      }
    } finally {
      setLoading(false);
    }
  };

  // get all data of contact page or Contact By user
  const getContactPageData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/v1/getUserRequestToConnect`, {
        withCredentials: true, // Ensures cookies are sent
        headers: { "Content-Type": "application/json" },
      });
      setContactData(res.data.connectionMessage);
      if (res.data.success) {
        toast.success(res.data.message || "Data fetched!");
      } else {
        toast.error(res.data.message || "Data fetching failed ! Try Again");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong !");
    } finally {
      setLoading(false);
    }
  };

  // delete function --> for delete a single user requrest
  const deleteContactRequest = async (data) => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `${url}/api/v1/deleteSingleRequestMessage`,
        {
          data: data,
          withCredentials: true,
        }
      );

      if (res.data?.success) {
        getContactPageData();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Deleting failed! Try Again");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // service page id or service,  inquiry form function
  const serviceInquiryForm = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(`${url}/api/v1/sumbitServiceInquiry`, data, {
        withCredentials: true,
      });
      if (res?.data?.message) {
        toast.success(res.data.message);
      } else {
        toast.error("Unexpected response from the server.");
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data?.message || "Server error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getServiceInquiryData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/v1/getServiceInquiry`, {
        withCredentials: true, // Ensures cookies are sent
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.success) {
        setServiceData(res);
        toast.success(res.data.message || "Service data Fetched successfully!");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || " Something went wrong!");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  const deleteServiceData = async (data) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${url}/api/v1/deleteServiceData`, {
        data: data,
        withCredentials: true,
      });

      if (res.data?.success) {
        getServiceInquiryData();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Data deletion failed! Try Again");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // career page , career form function
  const submitCareerForm = async (data, reset) => {
    const formData = new FormData();

    // Append form fields
    formData.append("name", data.name);
    formData.append("emailId", data.emailId);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("jobTitle", data.jobTitle);
    formData.append("message", data.message);

    // Resume Validation
    if (!data.resume || data.resume.length === 0) {
      toast.error("Please upload a resume.");
      return;
    }
    formData.append("resume", data.resume[0]);

    // setLoading(true);
    try {
      setLoading(true);
      const res = await axios.post(`${url}/api/v1/submitCareerForm`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.success) {
        toast.success(res.data.message || "Form submitted successfully!");
        reset();
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        toast.error(
          res.data.message || "Form submition failed ! Please try again"
        );
      }
    } catch (err) {
      toast.error(err.response?.data?.message || " Something went wrong!");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  const getCareerData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/v1/getCareerData`, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.success) {
        setAllCareerData(res);
        toast.success(res.data.message || "Data Fetched successfully!");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || " Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const deleteCareerData = async (data) => {
    try {
      setLoading(true);

      const res = await axios.delete(`${url}/api/v1/deleteCareerFormIndiv`, {
        data: data,
        withCredentials: true,
      });

      if (res.data?.success) {
        getCareerData();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Data deletion failed! Try Again");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    loading,
    color,
    setColor,
    serviceRoute,
    setServiceRoute,
    showOne,
    showTwo,
    setShowOne,
    setShowTwo,
    user,
    login,
    signup,
    logout,
    changePassword,
    submitCareerForm,
    fileInputRef,
    selectedFile,
    setSelectedFile,
    contactForm,
    serviceInquiryForm,
    isAdminVerified,
    setIsAdminVerified,
    serviceData,
    getServiceInquiryData,
    contactData,
    setContactData,
    getContactPageData,
    deleteServiceData,
    deleteContactRequest,
    allUserData,
    setAllUserData,
    getAllUser,
    deleteUser,
    getCareerData, // function for calling api
    allCareerData, // useState to store real data
    deleteCareerData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
