import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} style={{ marginBottom: "15px" }}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Qty: {item.qty}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
