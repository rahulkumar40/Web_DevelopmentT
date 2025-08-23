import React, { useState } from "react";
import { use } from "react";

function ProductForm({ showMyApp }) {
  const [newDate, setDate] = useState("");
  const [newTitle, setTitle] = useState("");
  const [newFile, setFile] = useState("");
  const [product, setProducts] = useState([]);

  function titleChangeHandler(e) {
    const text = e.target.value;
    console.log(text);
    setTitle(text);
  }
  function dateChangeHandler(e) {
    const datet = e.target.value;
    setDate(datet);
    console.log(datet);
  }
  function fileChangeHandler(e) {
    setFile(e.target.value);
    console.log(newFile);
  }

  //   console.log("submitHandler");
  function handlerSubmit(e) {
    e.preventDefault();
    const newProduct = {
      title: newTitle,
      date: newDate,
      image: newFile,
    };

    setProducts((preProduct) => [...preProduct, newProduct]);
    showMyApp(product);
    console.log(product);

    setDate("");
    setTitle("");
    setFile("");
    // setProducts( (preProduct)=> [...preProduct, newProduct]);
    // console.log("hii rahul ");
  }

  return (
    <div className="max-w-[600px] bg-yellow-100 p-1 flex justify-center items-center flex-col ">
      <form action="submit" onSubmit={handlerSubmit}>
        <div className="text-input">
          <label htmlFor="title">Title</label>
          <input type="text" onChange={titleChangeHandler} value={newTitle} />
        </div>
        <div className="date-input">
          <label htmlFor="date">Date</label>
          <input type="date" onChange={dateChangeHandler} value={newDate} />
        </div>
        <div className="file-input">
          <label htmlFor="imgage">Image</label>
          <input
            type="file"
            onChange={fileChangeHandler}
            value={newFile}
            accept="image/*,video/*"
            multiple
          />
        </div>
        <div>
          <button
            className="bg-green-500 p-3 rounded-md hover:bg-blue-600 active:border-l-4 border-black"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
