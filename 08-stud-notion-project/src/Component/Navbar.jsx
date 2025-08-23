import React from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
function Navbar(props, { setIsloggedIn }) {
  let isLoggedIn = props.isLoggedIn;

  return (
    <div>
      <div className="flex gap-5 justify-between px-4  max-w-[1160px]  items-center w-11/12 py-4 mx-auto">
        <Link to="/">
          <img
            className=""
            src={logo}
            loading="lazyloading"
            height={32}
            width={160}
            alt="log"
          />
        </Link>
        <nav>
          <ul className="flex gap-x-6 text-gray-100">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Login - SingUp - LogOut - Dashboard */}

        <div className="flex items-center text-gray-100 gap-x-4 ">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-gray-700 rounded-[8px] py-[8px] px-[12px]">
                Log in
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/signup"
              onClick={() => {
                setIsloggedIn(false);
                toast.success("Logged Out");
              }}
            >
              <button className="bg-gray-700 rounded-[8px] py-[8px] px-[12px]">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button  className="bg-gray-700 rounded-[8px] py-[8px] px-[12px]">Log Out</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashbord">
              <button  className="bg-gray-700 rounded-[8px] py-[8px] px-[12px]">Dashboard</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
