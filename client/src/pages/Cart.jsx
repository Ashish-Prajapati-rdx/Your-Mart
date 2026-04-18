import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  //  Remove item
  const removeHandler = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //  Update quantity
  const qtyChangeHandler = (id, qty) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, qty: Number(qty) } : item,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //  Total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} style={{ marginBottom: "20px" }}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>

              {/* Quantity selector */}
              <select
                value={item.qty}
                onChange={(e) => qtyChangeHandler(item._id, e.target.value)}
              >
                {[...Array(10).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>

              {/*  Remove button */}
              <button
                onClick={() => removeHandler(item._id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </div>
          ))}

          {/*  Total */}
          <h3>Total: ₹{totalPrice}</h3>
        </>
      )}
      // checkout
      <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
