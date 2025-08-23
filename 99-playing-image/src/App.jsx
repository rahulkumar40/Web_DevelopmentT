import { useState } from "react";
import "./App.css";
import "react-slideshow-image/dist/styles.css";
import imageData from "./assets/img/data";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from "react-responsive-carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center p-5">

        <div>
        <div className="w-full max-w-lg">
    <div className="mb-4 text-lg font-medium">Score: 84 / 100</div>
    <div className="relative">
      {/* <!-- Total Line --> */}
      <div className="h-1 w-full bg-gray-300 rounded"></div>
      {/* <!-- Gained Line --> */}
      <div className="absolute top-0 h-1 bg-blue-500 rounded w-[54%]" ></div>
    </div>
  </div>
        </div>
        <h2 className="text-3xl font-semibold mb-5">Hii Scroller</h2>
        {/* <div className="relative w-full max-w-[1200px] h-[350px]">
          <Carousel
            showArrows={false}
            autoPlay
            dynamicHeight={false}
            infiniteLoop
            interval={3000}
            emulateTouch
            top-0 left-0
            className="w-full h-full absolute top-0 left-0"
          > */}
          <Slide>
            {imageData.map((data) => (
              <div key={data.id} className="flex justify-center items-center relative">
                <img
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                  src={data.path}
                  alt={`image-scroll-${data.id}`}
                />
                <progress>k</progress>
                <p className="absolute bottom-5 left-5 text-white font-semibold bg-black bg-opacity-50 p-2 rounded-md">
                  Image {data.id}
                </p>
              </div>
            ))}
            </Slide>
          {/* </Carousel>
        </div> */}
      </div>
    </>
  );
}

export default App;
