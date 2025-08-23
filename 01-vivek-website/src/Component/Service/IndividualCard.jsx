import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import PriceJump from "./PriceJump";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function IndividualCard({ datas, tag = "waiting" }) {
  const { color } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-orange-400 to-blue-600 flex justify-center items-center min-h-screen flex-col px-4 py-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto h-full">
        {datas.map((data) => {
          const Icon = data.icon;
          return (
            <motion.div
              key={data.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.80 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`${
                !color ? "bg-black text-gray-300" : "bg-white text-gray-900"
              } shadow-lg rounded-lg px-3 pb-4 max-w-sm text-center transition-all duration-300 h-full relative w-full flex flex-col`}
            >
              {/* Header with Icon & Title */}
              <div className="relative border-b-2 border-black py-4 flex justify-center items-center ">
                {Icon && (
                  <span className="text-blue-600 hover:text-orange-400 text-3xl cursor-pointer ">
                    <Icon />
                  </span>
                )}
                <h2 className="text-xl font-bold ml-3 leading-tight lg:h-[3rem]">
                  {data.service}
                </h2>
              </div>

              {/* Price Section */}
              {data.price && (
                <p className="text-xl font-semibold text-indigo-600 mt-3">
                  {data.price}/{" "}
                  <span className="text-gray-600 text-sm">{data.priceType}</span>
                </p>
              )}

              {/* Plans Section */}
              {data.plans && <PriceJump data={data} />}

              {/* Features List */}
              <div className="mb-8 text-start mt-2 px-3 flex-1">
                {data.features?.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {data.features.map((feature, index) => (
                      <li key={index} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-400">No description available.</p>
                )}
              </div>

              {/* Call to Action Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-5 mt-auto"
              >
                <Link
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all block text-center"
                  to={`/service/${tag}/${data.id}/service-form`}
                >
                  Get Started
                </Link>
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default IndividualCard;
