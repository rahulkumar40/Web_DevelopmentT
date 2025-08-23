import React, {
  useState,
  useLayoutEffect,
  useEffect,
  lazy,
  useContext,
} from "react";
import imageFile from "../assets/homeStore/imgData";
import landingPageContent from "../assets/homeStore/landingPageContent";
import HeroCarou from "../Component/Home/HeroCarou";
import FeatureSection from "../Component/Home/FeatureSection";
import TestimonialOfUM from "../Component/Home/TestimonialOfUM";
import { AppContext } from "../Context/AppContext";
import Footer from "../Component/Footer";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location]);
  const { color } = useContext(AppContext);
  return (
    <div className="h-full  w-full mt-[0.1rem] " id="who-we-are">
      <div className="w-11/12 max-w-[1260px] md:min-w-[87vw] mx-auto">
        <div className="h-full w-full">
          <HeroCarou imageFile={imageFile} />
        </div>
        {/* Statements Section */}
        <div
          id="section1"
          className={` w-full grid grid-cols-1 ms:grid-cols-2 md:grid-col  py-3 ${
            !color
              ? ` bg-gray-800 text-white bg-opacity-45`
              : `bg-gray-200 text-black`
          }`}
        >
          <FeatureSection datas={landingPageContent} />

          <div>
            <h2
              className={`text-center text-3xl mt-4   bg-gradent-to-r to-indigo-600 rounded-t-md  via-orange-600 from-blue-600   pt-5 ${
                color
                  ? `bg-gray-200 bg-opacity-100 text-black`
                  : ` bg-gray-900 text-white`
              } pb-4 `}
            >
              What Our <strong>Clients Are Saying</strong>
            </h2>
            <TestimonialOfUM datas={landingPageContent.testimonials.reviews} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
