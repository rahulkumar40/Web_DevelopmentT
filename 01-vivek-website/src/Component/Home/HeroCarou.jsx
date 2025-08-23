import React, { useState, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroHeadingCard from "./HeroHeadingCard";
import { AppContext } from "../../Context/AppContext";
import { motion } from "framer-motion";
const HeroCarou = ({ imageFile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const { color } = useContext(AppContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="w-full mx-auto mt-1">
      <motion.div
        initial={{opacity:0, y:-50}}
        whileInView={{opacity:1, y:0, }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{once:false, amount:0.6,}}
        className={`relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-sky-600 ${
          !color ? `text-black` : `text-gray-100`
        }`}
      >
        {/* Slider Component */}
        <Slider className="w-full" ref={sliderRef} {...settings}>
          {imageFile.map((data, index) => (
            <div key={data.id} className="relative flex justify-center w-full">
              <img
                src={data.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-[22rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] object-cover rounded-lg transition-transform duration-500 hover:scale-[1.02]"
              />
              {/* Overlay Content */}
              <HeroHeadingCard data={data} />
            </div>
          ))}
        </Slider>

        {/* Bullet Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {imageFile.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? "bg-blue-500 scale-125" : "bg-gray-400"
              }`}
              onClick={() => sliderRef.current.slickGoTo(index)}
            ></button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute hidden sm:flex left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-all duration-300 shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute hidden sm:flex right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-all duration-300 shadow-lg"
        >
          ❯
        </button>
      </motion.div>
    </div>
  );
};

export default HeroCarou;
