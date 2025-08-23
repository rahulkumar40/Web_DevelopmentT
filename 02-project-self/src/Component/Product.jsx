// Product.jsx
import React from "react";

function Product(props) {
  return (
    <div className="bg-orange-600 h-auto w-[200px] p-4 m-4 rounded shadow-md">
      <p className="font-bold text-xl">{props.data.title || "Untitled"}</p>
      <p>{props.data.date || "No Date Provided"}</p>
    </div>
  );
}

export default Product;
