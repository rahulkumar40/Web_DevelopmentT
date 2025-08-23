import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Random() {
  const [gif, setGif] = useState("");
  const API_KEY = `CKC0ukpZVjPlTV8qrBqpfLAQF0ibeGEJ`;
  function clickHandler() {
    fetchData();
  }
  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error("Rate limit exceeded. Please try again later.");
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-1/2  bg-orange-500 border-2 border-black flex gap-y-3 mt-[15px] items-center flex-col mb-4">
      <h1 className="text-xl font-bold underline uppercase">ARandom Gif</h1>
      <img src={gif} alt="" width={450} className="my-2" />
      <button
        className="bg-gray-300 mt-2 w-10/12 text-lg mb-4 rounded-md py-2"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
