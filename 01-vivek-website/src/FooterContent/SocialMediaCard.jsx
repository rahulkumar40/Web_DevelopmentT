import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SocialMediaCard() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-y-2">
        <div className="contect-us ">
          <h2 className="text-2xl my-2 font-bold">Social Media Handle</h2>
          <div className="flex gap-x-3 justify-start items-center ">
            <a
              className=" bg-facebook text-white text-[1.6rem] px-2 py-2 rounded-md"
              href="https://www.facebook.com/profile.php?id=61573210764752"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="bg-twitter text-black text-[1.6rem] px-2 py-2  rounded-md"
              href="https://x.com/vivek19020?t=lG7wBVb3zyESumZiytoWuQ&s=09"
              target="_blank"
            >
              <FaXTwitter />
            </a>
            <a
              className="  bg-instagram text-black text-[1.6rem] px-2 py-2 rounded-md"
              href="https://www.instagram.com/erapost08/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              className="bg-linkedin text-black text-[1.6rem] px-2 py-2 rounded-md"
              href="https://linkedin.com/in/vivek19020/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="contect-us-one my-1 py-2 flex flex-col gap-y-2">
          <h2>Contact Us</h2>
          <div className="flex gap-x-3">
            <button className=" bg-facebook text-white text-[2rem] w-[3rem] px-2  rounded-md ">
              <IoIosMail />
            </button>
            <a className="text-start" href="mailto:erapost08@gmail.com">
              erapost08@gmail.com
            </a>
          </div>
          {/* <div className="flex gap-x-3 px-4">
                  <button className=" bg-facebook text-white text-[2rem] w-[3.2rem] px-2 py-1 rounded-md ">
                    <FaMessage />
                  </button>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div> */}
          <div className="flex gap-x-3">
            <button className=" bg-facebook text-white text-[2rem] w-[3rem] px-2  rounded-md ">
              <MdAddCall className="" />
            </button>
            <a href="tel:+919528583220">9528583220</a>
          </div>
          <div className="flex  gap-x-3">
            <button className=" bg-facebook text-white text-[2rem] w-[3.2rem] h-[3rem] px-2 py-1 rounded-md ">
              <FaMapLocationDot onClick={() => navigate("/contact")} />
            </button>
            <p>
              Sanskar Bhavan, Chhapraula, GT Road, Gautam Buddha Nagar, UP -
              201009
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaCard;
