import { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  const removeHandler = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const qtyChangeHandler = (id, qty) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, qty: Number(qty) } : item,
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-content">
          {/* LEFT SIDE */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

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

                  <button onClick={() => removeHandler(item._id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
