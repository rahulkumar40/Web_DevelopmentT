import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Products from "../Component/Products";

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const url = "https://fakestoreapi.com/products";

  async function fetechData() {
    console.log("Hi innrer fetach ");
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
    //   console.log(data);
      setPost(data);
    } catch (e) {
      console.log("Error find", e);
    }

    setLoading(false);
  }
  useEffect(() => {
    fetechData();
  }, []);
  return (
    <div>
      <div>{loading ? "Data Loading..." : <div>
        {
            posts.length>0?(<div>
                {
                    posts.map( (post)=>{
                        return <Products key={post.id} post={post}></Products>
                    })
                }
            </div>):
            (<p>Data is Not Present</p>)
        }
        </div>}</div>
    </div>
  );
}
export default Home;
