import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";
function Products({
  post,
  title,
  price,
  description,
  category,
  image,
  rating,
  id,
}) {
  const [selected, setSelected] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };
  const removeFromCart = () => {
    dispatch(remove(id));
    toast.success("Item remove from cart");
  };
  return (
    <div className="w-[17rem] h-full flex justify-center flex-wrap w">
      <div>
        <p className="text-xm">{title}</p>
      </div> 
      <div>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{price}</p>
      </div>

      <div>
        <button>
          {" "}
          {cart.some((p) => p.id == id) ? (
            <button onClick={removeFromCart}>Remove Item</button>
          ) : (
            <button onClick={addToCart}>Add To Cart</button>
          )}
        </button>
      </div>
    </div>
  );
}

export default Products;
