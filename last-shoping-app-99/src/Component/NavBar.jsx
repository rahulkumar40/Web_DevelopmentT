import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="h-auto mt-3 sticky top-0 left-0 w-full">
      <div className="flex flex-row justify-between px-2 py-2">
        <NavLink to="/">
          <div>
            <img className="w-[5rem]" src={logo} alt="" />
          </div>
        </NavLink>

        <div className="flex justify-center items-center gap-x-5">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="cart">
            <i className="text-blue-900">
              <FaShoppingCart />
            </i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
