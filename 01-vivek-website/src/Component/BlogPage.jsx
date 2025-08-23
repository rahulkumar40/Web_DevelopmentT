import React, { useState } from "react";

function BlogPage() {
  const [blog, setBlog] = useState(false); // Show/Hide input box
  const [blogs, setBlogs] = useState([]); // Store blogs
  const [blogContent, setBlogContent] = useState(""); // Store input content

  // Handle input change
  const handleInputChange = (e) => {
    setBlogContent(e.target.value);
  };

  // Add blog to the list
  const addBlog = () => {
    if (blogContent.trim() !== "") {
      setBlogs([...blogs, blogContent]);
      setBlogContent(""); // Clear input
    }
  };

  
  const setD= ()=>{

  }
  // Clear all blogs
  const clearBlogs = () => {
    setBlogs([]);
  };

  return (
    <div className="p-5">
    </div>
  );
}

export default BlogPage;
