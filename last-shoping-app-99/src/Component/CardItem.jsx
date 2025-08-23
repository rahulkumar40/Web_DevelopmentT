import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from 'react-hot-toast';

function CardItem({ image,title,description,price,id,itemIndex }) {
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(id));
    toast.success("Item Removed");
  }
  return (
    <div>
      <div>
        <img src={image} alt="image-here" />
      </div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <div>
          <p>{price}</p>
          <button onClick={removeFromCart}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
