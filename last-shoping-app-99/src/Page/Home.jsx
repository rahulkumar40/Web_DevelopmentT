import React, { useEffect, useState } from "react";
import Spinner from "../Component/Spinner";
import Products from "../Component/Products";
function Home() {
  const [isLoding, setIsLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const url = "https://fakestoreapi.com/products";
  async function fetchProductData() {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setPost(data);
    } catch (error) {
      console.log(error + "error occure");
      setPost([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="h-full w-full ">
      <div className="w-11/12 max-w-[1160px] mx-auto">
        {isLoding ? (
          <Spinner></Spinner>
        ) : posts.length > 0 ? (
          <div className="">
            {posts.map((post) => (
              <Products key={post.id} post={post}   {...post} ></Products>
            ))}  
          </div>
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
