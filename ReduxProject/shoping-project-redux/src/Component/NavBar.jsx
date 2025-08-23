import React from "react";

import { NavLink } from "react-router-dom";
import logo from '../assets/logo.webp';
import { FaShoppingCart } from "react-icons/fa";
function NavBar(){
    return (
        <div className="w-11/12 max-w-[1160px] h-full">
            <div className="flex justify-between items-center">
                <img src={logo} alt="image-here" loading="lazy" className="w-[4rem] h-[3rem] my-2 mx-2" />
                <div className="home-Cart-container flex justify-between items-center gap-x-[2rem]">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/cart"><FaShoppingCart /></NavLink>
                </div>
            </div>
        </div>
    )
}
export default NavBar;