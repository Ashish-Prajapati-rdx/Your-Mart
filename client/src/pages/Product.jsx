import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `http://127.0.0.1:5000/api/products/${id}`,
      );
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  const navigate = useNavigate();
  const addToCartHandler = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      exist.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };
  <button onClick={addToCartHandler}>Add to Cart</button>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
    </div>
  );
};

export default Product;
