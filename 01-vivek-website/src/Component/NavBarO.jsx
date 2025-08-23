import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo1.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";

function NavBarO() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setColor, color, user } = useContext(AppContext);
  const [avatarUrl, setAvatarUrl] = useState("");

  // setting user Name as user Logo
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
  const handleLogoClick = () => navigate("/");

  // Toggle menu for mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`sticky top-0 w-full ${
        color ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
      } z-50 transition-all duration-300`}
    >
      <div className="flex justify-between items-center px-4 py-3 md:px-8 shadow-md">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-12 cursor-pointer"
          onClick={handleLogoClick}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center ">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <NavLink to="/service" className="hover:text-blue-500">
              Service
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg text-black rounded-lg py-2">
                <Link
                  to="/service/school-college"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  School & College
                </Link>
                <Link
                  to="/service/personal"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Personal
                </Link>
                <Link
                  to="/service/business"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Business
                </Link>
                <Link
                  to="/service/political"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Political
                </Link>
              </div>
            )}
          </div>
          <NavLink to="/about" className="hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/career" className="hover:text-blue-500">
            Career
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-500">
            Contact
          </NavLink>
        </div>

        {/* Login/Signup Button */}
        <button
          className={`${
            user
              ? `hidden `
              : `md:block hidden bg-blue-500 px-4 py-2 rounded-lg  text-white hover:bg-blue-600 transition`
          } `}
          onClick={() => navigate("/login")}
        >
          {"log in"}
        </button>

        {/* Dark/Light Mode Toggle */}
        <button className="ml-4 text-xl" onClick={() => setColor(!color)}>
          <MdLightMode />
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 text-white flex flex-col space-y-4 py-4 px-6 absolute right-0 top-[4.3rem] w-[50vw] h-[91vh] rounded-lg">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className=" flex justify-between items-center "
          >
            <button>
              <Link to={`/service`} className="block">
                Service
              </Link>
            </button>

            <button className="text">{isDropdownOpen ? "▲" : "▼"}</button>
          </div>
          {isDropdownOpen && (
            <div className="pl-4">
              <Link
                to={`/service/school-college`}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                School & College
              </Link>
              <Link
                to={`/service/personal`}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Personal
              </Link>
              <Link
                to={`/service/business`}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Business
              </Link>
              <Link
                to={`/service/political`}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Political
              </Link>
            </div>
          )}
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/career" onClick={() => setMenuOpen(false)}>
            Career
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <button
            className="bg-blue-500 px-4 py-2 rounded-lg font-semibold"
            onClick={() => {
              navigate("/signup");
              setMenuOpen(false);
            }}
          >
            Login/Signup
          </button>

          {/* Social Media (Visible only in Mobile) */}
          <div className="flex space-x-4 justify-center mt-4">
            <Link
              to="https://www.facebook.com/vivek19020"
              target="_blank"
              className="text-blue-600 text-2xl"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://x.com/vivek19020"
              target="_blank"
              className="text-gray-300 text-2xl"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://www.instagram.com/m.p_vivek/"
              target="_blank"
              className="text-pink-500 text-2xl"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://linkedin.com/in/vivek19020/"
              target="_blank"
              className="text-blue-500 text-2xl"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      )}

      <div className="profile absolute top-[0.6rem] sm:right-[7rem] right-[6rem]">
        <button className="bg-black text-white rounded-full w-[3rem] h-[3rem]">
          {
            <Link to={"/profile"}>
              {user ? (
                <div>
                  <img
                    className="rounded-full"
                    src={avatarUrl}
                    alt="avtar-here"
                  />
                </div>
              ) : (
                <p>user</p>
              )}
            </Link>
          }
        </button>
      </div>
    </div>
  );
}

export default NavBarO;
