import React, { useNavigate } from "react";
import Service from "../Page/Service";
import { NavLink, Link } from "react-router-dom";
function FooterTitle() {
  return (
    <div>
      <div className="mr-3 py-2 Service w-[13rem] ">
        <NavLink to="/service">Service</NavLink>
        <div className="flex flex-col">
          <Link
            to="/service#serve1"
            className="hover:decoration-white hover:underline"
          >
            Compaing Website
          </Link>
          <Link className="hover:decoration-white hover:underline">
            Social Media Content
          </Link>
          <Link className="hover:decoration-white hover:underline">
            Video Content
          </Link>
          <Link className="hover:decoration-white hover:underline">
            SMS & WhatsApp Marketing
          </Link>
          <Link className="hover:decoration-white hover:underline">
            Bluk SMS Advertise
          </Link>
          <Link to="/service#last" className="hover:decoration-blue-400  hover:underline  ">
            Voice Call (OBD){" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterTitle;
