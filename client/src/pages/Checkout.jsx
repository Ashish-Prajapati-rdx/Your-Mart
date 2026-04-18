import { useEffect, useState } from "react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const placeOrderHandler = () => {
    alert("Order Placed Successfully 🎉");

    // clear cart
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout 🧾</h2>

      {cartItems.map((item) => (
        <div key={item._id}>
          <p>{item.name} × {item.qty}</p>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      <button onClick={placeOrderHandler}>Place Order</button>
    </div>
  );
};

export default Checkout;