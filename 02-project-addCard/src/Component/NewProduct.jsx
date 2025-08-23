import React from "react";
import ProductFrom from "./ProductFrom";

function NewProduct(props) {
  function saveProduct(data) {
    console.log("I am inside new product");
    console.log(data);

    // calling parent function 
    props.printProduct(data);
  }
  return (
    <div>
      <div>
        <ProductFrom onSaveProduct={saveProduct} />
      </div>
    </div>
  );
}

export default NewProduct;
