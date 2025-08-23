// App.jsx
import { useState } from "react";
import "./App.css";
import Product from "./Component/product";
import ProductForm from "./Component/ProductForm";
import { use } from "react";
import ProductCre from "./Component/ProductCre";

function App() {
  const [products, setProducts] = useState([]); // Array to store multiple products
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newProduct, setNewProduct] = useState("");

  // Handlers for form inputs
  function handleTitleChange(e) {
    setNewTitle(e.target.value);
  }

  function handleDateChange(e) {
    setNewDate(e.target.value);
  }

  // Handler for form submission
  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      title: newTitle,
      date: newDate,
    };

    // Add the new product to the array
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    // Clear the input fields
    setNewTitle("");
    setNewDate("");
  }

  function showMyApp(product) {
    console.log("Into App ...");
    console.log(product);
    setNewProduct(product);
  }

  return (
    <div className="p-8 flex justify-center items-center flex-col">
      {/* Form to Add Product */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="flex justify-between items-center max-w-md bg-blue-700 h-12 p-2 rounded">
          <label htmlFor="title" className="text-white text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border rounded-md text-white bg-gray-500 px-2"
            value={newTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex justify-between items-center max-w-md bg-blue-700 h-12 p-2 rounded">
          <label htmlFor="date" className="text-white text-lg">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="border rounded-md text-white bg-gray-500 px-2"
            value={newDate}
            onChange={handleDateChange}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </form>

      {/* Display Products */}
      <div className="flex flex-wrap">
        {products.length === 0 ? (
          <p className="text-gray-500">No products added yet!</p>
        ) : (
          products.map((product, index) => (
            <Product key={index} data={product} />
          ))
        )}
      </div>
      <div className="p-4 bg-green-500">
        <ProductForm showMyApp={showMyApp} />
        <div className="">
          {newProduct.length === 0 ? (
            <p>No product yed added. So add Product Detial...</p>
          ) : (
            <ProductCre products={newProduct} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
