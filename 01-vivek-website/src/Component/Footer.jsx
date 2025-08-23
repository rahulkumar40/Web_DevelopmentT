import React, { useContext } from "react";
import { FaRegCopyright } from "react-icons/fa6";
import services from "../assets/serviceData.js";
import SocialMediaCard from "../FooterContent/SocialMediaCard.jsx";
import { Link } from "react-router-dom";
import FooterTitle from "../FooterContent/FooterTitle.jsx";
import { AppContext } from "../Context/AppContext.jsx";
function Footer() {
    const {color} = useContext(AppContext);
  const datas = services;
  return (
    <div className=" h-full w-full pb-2 ">
      <div className={`-11/12 max-w-[1260px] min-w-[87vw] mx-auto  my-4 grid grid-cols-1 md:grid-cols-3 gap-x-1 p-4  sm:grid-cols-2 rounded-lg  ${!color?`bg-gray-900 text-white`:`bg-gray-200 text-black`}`}>
        {/* contect-us-container  */}

        <div className="contect-us-container w-full ">
          <SocialMediaCard />
        </div>
        <div className="contect-us-container w-full ">
          <FooterTitle />
        </div>
        <div className="contect-us-container w-full ">
          <div className="">
            <h2 className="text-xl">Menu</h2>
            <ul className="flex flex-col">
              <Link to="/">Home</Link>
              <Link to="/service">Service</Link>
              <Link to="/about">About</Link>
              <Link to="/career">Carrer</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
          <div></div>
        </div>
      </div>

      {/* copy right section  */}

      <div className={`flex justify-center items-center gap-x-2 mb-2 mx-auto ${!color?'bg-black text-white':`text-black bg-white`}`}>
        <span className="">
          <FaRegCopyright />
        </span>
        <p className=""> 2024 ERA Post. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <div className="w-full h-full flex flex-wrap justify-center items-center ">
          <div className=" min-h-[6rem] w-[20rem] bg-contain mb-2">
            <XEmbed url="https://x.com/vivek19020/status/1610623482894876672" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <YouTubeEmbed
              url="https://www.youtube.com/watch?v=HpVOs5imUN0"
              width={325}
              height={220}
            />
          </div>
        </div> */
}
