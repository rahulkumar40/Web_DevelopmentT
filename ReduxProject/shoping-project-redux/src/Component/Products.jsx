import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../Redux/CartSlice";
function Products({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function removeItem() {
    dispatch(remove(post.id));
  }
  function addItem() {
    dispatch(add(post));
  }
  return (
    <div>
      <div>
        <p>{post.title}</p>
        <p>{post.description}</p>
        <p>{post.category}</p>
        <div>
          <img src={post.image} alt="" />
        </div>
        <div>
          <p>{post.price}</p>
          <div>
            

            {cart.some((p) => p.id == post.id) ? (
              <div>
                <button onClick={removeItem}>Remove Item</button>
              </div>
            ) : (
              <div>
                <button onClick={addItem}>Add Item</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
