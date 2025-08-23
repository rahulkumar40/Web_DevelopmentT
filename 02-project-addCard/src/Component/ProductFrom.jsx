import React, { useState } from "react";
import ProductData from "./ProductData";
import ProductItem from "./ProductItem";
function ProductFrom(props) {
  // first approach
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function dateChangeHandler(e) {
    setDate(e.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const productData = {
      title: newTitle,
      date: newDate,
    };
//     console.log(productData);
    props.onSaveProduct(productData);

    setTitle('');
    setDate('');
  }


  return (
    <form action="" onSubmit={submitHandler}>
      <div className="bg-blue-600">
        <div className="flex justify-between text-xl mt-3 p-4">
          <label htmlFor="tile">Title</label>
          <input
            className="rounded-md border-2 border-black"
            type="text" value={newTitle} 
            onChange={titleChangeHandler}
          />
        </div>
        <div className="flex justify-between text-xl mt-3 p-4">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-12"
            onChange={dateChangeHandler} value={newDate}
          />
        </div>
        <div className="mb-4 p-4">
          <button className="text-2xl bg-white p-2 rounded-md" type="submit">
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductFrom;
