import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardItem from "../Component/CardItem";
function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="doId">
          <div className="flex flex-wrap doId" >
            {cart.map((item, index) => {
                  console.log(item)
              return (
                <CardItem key={index} {...item} itemIndex={index}></CardItem>
              );
            })}
          </div>
          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Item</span> : {cart.length}
            </p>
          </div>
          <div>
            <p className="text-blue-600">Total Amoutn : {totalAmount}</p>
          </div>
          <div>
            <button>Check Out..</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Cart Empty</h2>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
