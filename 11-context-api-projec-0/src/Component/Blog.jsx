import React, { useContext } from "react";
import { AppContextA } from "../Context/AppContextA";
import Spinner from "./Spinner";

function Blog() {
  const { loading, posts } = useContext(AppContextA);
  return (
    <div className="h-full w-full">
      <div className="w-11/12 max-w-[1100px] mx-auto  mb-4 min-h-[45vh] flex justify-center items-center px-4">
        {loading ? (
          <Spinner className="ml-[30rem]" />
        ) : posts.length === 0 ? (
          <div>
            <p>Page Not Found</p>
          </div>
        ) : (
          <div className="text-black">
            {posts.map((post, index) => (
              <div key={index} className="mx-3 my-3">
                <p className="text-2xl font-semibold">{post.title}</p>
                <div className="my-2 text-sm">
                  <p>
                    By {post.author} on{" "}
                    <span className="underline cursor-pointer active:text-blue-600 duration-300 transition-all">
                      {" "}
                      {post.category}{" "}
                    </span>
                  </p>
                  <p>Posted On {post.date}</p>
                </div>

                {/* <img src={post.img} alt="here is image" /> */}
                <div>
                  <p>{post.content}</p>
                </div>
                <div className="flex text-blue-400 gap-x-2 text-sm">
                  {post.tags.map((tag, index) => (
                    <p className="underline cursor-pointer" key={index}> #{tag} </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
