import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link } from "react-router-dom";

function ComboPackCard({ datas, tag = "waiting" }) {
  const { color } = useContext(AppContext);
  return (
    <div
      className={`px-6 py-3 w-full  ${
        !color ? `bg-black text-white` : `bg-white text-black`
      }`}
    >
      <h2 className="text-xl">Combo Packages</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 mx-auto gap-x-4 gap-y-5 ">
        {datas.map((data) => (
          <div
            key={data.id}
            className="flex flex-col bg-gradiento-r items-center to-orange-500 from-blue-400  py-4 px-2 relative pb-[4rem]"
          >
            <h2 className="text-2xl  text-center font-bold mb-3  md:h-[4rem] h-auto leading-[1.7rem]">
              {data.title}
            </h2>
            <div>
              {data.subHeading && (
                <p className="text-[0.8rem] md:h-[39px] text-center ">
                  {data.subHeading}
                </p>
              )}
            </div>
            <p className="mb-4">
              Starting {data.price} / {data.priceType}
            </p>

            <div className="text-5xl mb-4">
              <span
                onClick={() => {}}
                className={` transition-all duration-[0.4s] ${
                  data.id == 1
                    ? `text-indigo-600 hover:text-indigo-700`
                    : data.id == 2
                    ? `text-blue-600 hover:text-blue-700`
                    : `text-orange-400 hover:text-orange-500`
                }`}
              >
                <data.icon />
              </span>
            </div>
            <div className="border-[0.1px]  px-4 w-[85%] border-gray-300 mb-3"></div>
            <div className="px-2">
              {data.features.map((features, index) => (
                <ul key={index} className="list-disc ">
                  <li> {features}</li>
                </ul>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 flex justify-center items-center w-full ">
              <button className="bg-orange-500 px-5 py-2 hover:bg-orange-400 transition-all active:bg-orange-600 duration-[0.3s] font-semibold rounded-lg  ">
                <Link to={`/service/${tag}/${data.id}/service-form`}>
                  Get Start
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComboPackCard;
