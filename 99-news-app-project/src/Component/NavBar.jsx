import React, { useContext, useState } from "react";
import logo from "../assets/logo.webp";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { AppContext } from "../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const { title, setTitle, searchValue, setSearchVal } = useContext(AppContext);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  function changeHandler(e) {
    setSearchVal(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setTitle(searchValue);
  }

  function clickHandler(newTitle) {
    setTitle(newTitle);
    setMenu(false);
  }

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4 py-2 text-white relative">

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200 border border-white"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 font-semibold text-white">
          <NavLink to="/" onClick={() => clickHandler("world")} className="hover:text-yellow-300 transition-colors">World</NavLink>
          <NavLink to="india" onClick={() => clickHandler("india")} className="hover:text-yellow-300 transition-colors">India</NavLink>
          <NavLink to="cricket" onClick={() => clickHandler("cricket")} className="hover:text-yellow-300 transition-colors">Cricket</NavLink>
          <NavLink to="crime" onClick={() => clickHandler("crime")} className="hover:text-yellow-300 transition-colors">Crime</NavLink>
          <NavLink to="technology" onClick={() => clickHandler("technology")} className="hover:text-yellow-300 transition-colors">Technology</NavLink>
        </nav>

        {/* Search + Saved + Menu Icon */}
        <div className="flex items-center gap-3">
          <form
            onSubmit={submitHandler}
            className="flex items-center bg-white rounded-full overflow-hidden shadow-md focus-within:ring-2 ring-yellow-400 transition-all"
          >
            <input
              type="text"
              className="px-3 py-1 text-black outline-none w-28 md:w-40 font-medium"
              value={searchValue}
              onChange={changeHandler}
              placeholder="Search..."
            />
            <button type="submit" className="text-indigo-600 px-2 text-xl">
              <CiSearch />
            </button>
          </form>

          <NavLink
            to="saveCart"
            className="hidden md:inline-block bg-yellow-400 text-black font-bold px-3 py-1 rounded-full hover:bg-yellow-500 transition"
          >
            Saved
          </NavLink>

          <button onClick={() => setMenu(!menu)} className="md:hidden text-2xl">
            {menu ? <RxCross2 /> : <CiMenuKebab />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <nav className="absolute top-full right-4 bg-white text-black rounded-lg shadow-lg w-36 flex flex-col mt-2 overflow-hidden animate-slide-down">
            <NavLink to="/" onClick={() => clickHandler("world")} className="py-2 px-4 hover:bg-gray-100">World</NavLink>
            <NavLink to="india" onClick={() => clickHandler("india")} className="py-2 px-4 hover:bg-gray-100">India</NavLink>
            <NavLink to="cricket" onClick={() => clickHandler("cricket")} className="py-2 px-4 hover:bg-gray-100">Cricket</NavLink>
            <NavLink to="crime" onClick={() => clickHandler("crime")} className="py-2 px-4 hover:bg-gray-100">Crime</NavLink>
            <NavLink to="technology" onClick={() => clickHandler("technology")} className="py-2 px-4 hover:bg-gray-100">Technology</NavLink>
            <NavLink to="saveCart" onClick={() => clickHandler("Saved")} className="py-2 px-4 hover:bg-gray-100">Saved</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavBar;
