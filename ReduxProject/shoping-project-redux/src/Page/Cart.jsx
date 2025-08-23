import React from "react";
NavLink;
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove } from "../Redux/CartSlice";
function Cart() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {cart.length > 0 ? (
          <div>
            {cart.map((cart) => (
              <div key={cart.id}>
                <img src={cart.image} alt="" />
                <div>
                  <p>{cart.title}</p>

                  <button onClick={()=> dispatch(remove(cart.id))}>delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>No Cart Available</p>
            <NavLink to="/">Shop Now</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
