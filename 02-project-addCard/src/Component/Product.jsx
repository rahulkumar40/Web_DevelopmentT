import React from "react";
import ProductData from "./ProductData";
import ProductItem from "./ProductItem";
export default function Product(props) {
  return (
    <>
      <div className="flex justify-between  bg-yellow-400 p-2">
        <ProductData date={props.data[0].date} />
        <ProductItem item={props.data[0].title} />
        {/* <ProductAddCard/> */}
      </div>
      <div className="flex justify-between  bg-yellow-400 p-2">
        <ProductData date={props.data[1].date} />
        <ProductItem item={props.data[1].title} />
        {/* <ProductAddCard/> */}
      </div>
      <div className="flex justify-between  bg-yellow-400 p-2">
        <ProductData date={props.data[2].date} />
        <ProductItem item={props.data[2].title} />
        {/* <ProductAddCard/> */}
      </div>
    </>
  );
}
