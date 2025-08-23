import React, { useState } from "react";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import notImage from "../assets/not-image.png";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { FaShareAlt } from "react-icons/fa";
import { addNews, removeNews } from "../redux/AppSlice";
import { GoLink } from "react-icons/go";
import ShareButton from "./ShareButton";

function Card({
  urlToImage,
  publishedAt,
  title,
  description = "",
  author,
  url,
  newsData,
}) {
  const [descRead, setDescRead] = useState(true);
  const [added, setAdded] = useState(false);
  const [share, setShare] = useState(false);

  const dispatch = useDispatch();

  const date = new Date(publishedAt);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  const des =
    typeof description === "string" && description.trim()
      ? description
      : "This is a sample description.";

  const desAuthor = typeof author === "string" && author.trim()
    ? author
    : "Unknown Author";

  const finalDesc = descRead ? `${des.substring(0, 130)}...` : des;

  function onClickHandler() {
    dispatch(addNews(newsData));
    setAdded(true);
  }

  function removeClickHandler() {
    dispatch(removeNews(newsData.source?.id));
    setAdded(false);
  }

  return (
    <div className="flex flex-col justify-between w-full max-w-[320px] shadow-lg rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-gray-300 overflow-hidden">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden relative">
        <img
          src={urlToImage || notImage}
          alt="News"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Author and Date */}
      <div className="flex justify-between items-center px-4 py-2 text-xs text-gray-700">
        <span className="font-medium truncate">{desAuthor.length > 14 ? `${desAuthor.substring(0, 14)}...` : desAuthor}</span>
        <div className="text-[10px] text-right">
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-2 text-start">
        <p className="text-base font-semibold text-gray-900 leading-5">{title.length > 50 ? `${title.substring(0, 50)}...` : title}</p>
      </div>

      {/* Description */}
      <div className="px-4 text-gray-800 pb-2">
        <p className="text-[0.85rem] font-normal text-justify">
          {finalDesc}
          <span
            onClick={() => setDescRead(!descRead)}
            className="ml-2 text-blue-600 cursor-pointer hover:underline"
          >
            {descRead ? "Read more" : "Show less"}
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-300 relative">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xl">
          <GoLink />
        </a>

        <div>
          {added ? (
            <CiBookmarkCheck
              onClick={removeClickHandler}
              className="text-green-600 cursor-pointer text-2xl hover:scale-110 transition-transform"
            />
          ) : (
            <CiBookmark
              onClick={onClickHandler}
              className="text-gray-700 cursor-pointer text-2xl hover:scale-110 transition-transform"
            />
          )}
        </div>

        <div className="relative">
          {share ? (
            <>
              <MdCancel
                onClick={() => setShare(false)}
                className="text-red-600 cursor-pointer text-xl absolute -top-4 -right-4 hover:scale-110 transition-transform"
              />
              <div className="absolute bottom-10 left-[-150px]">
                <ShareButton shareUrl={url} title={title} />
              </div>
            </>
          ) : (
            <FaShareAlt
              onClick={() => setShare(true)}
              className="text-purple-700 cursor-pointer text-xl hover:scale-110 transition-transform"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
