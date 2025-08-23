import React from "react";
import notImage from "../assets/not-image.png";
import { useDispatch } from "react-redux";
import { removeNews } from "../redux/AppSlice";

function SaveCard({ data }) {
  const dispatch = useDispatch();

  function removeHandler() {
    dispatch(removeNews(data.source?.id));
  }

  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-11/12 max-w-[1100px] bg-gradient-to-br from-white via-gray-100 to-blue-50 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row gap-4 hover:shadow-2xl transition-shadow duration-300">
        {/* Image section */}
        <div className="md:w-1/2 w-full relative">
          <img
            src={data.urlToImage || notImage}
            alt={data.title || "Saved news"}
            className="w-full h-60 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none hover:scale-105 transition-transform duration-300"
          />
          <p className="absolute bottom-2 right-2 bg-white/70 text-blue-700 px-2 py-0.5 rounded shadow-sm text-xs font-semibold">
            {data.source?.name || "Unknown Source"}
          </p>
        </div>

        {/* Content section */}
        <div className="flex flex-col justify-between p-4 md:w-1/2 w-full">
          <div>
            <p className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-justify">
              {data.title || "No Title Available"}
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-2 text-justify line-clamp-3">
              {data.content || "No content available. Please check the article for details."}
            </p>
            <p className="text-sm text-gray-500 text-justify line-clamp-2">
              {data.description || "No description provided."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Read Full Article
            </a>

            <button
              onClick={removeHandler}
              className="flex-1 text-center bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveCard;
