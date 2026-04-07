import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const addToCartHandler = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      exist.qty += 1;
    } else {
      cart.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };

  /*
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>

      //  BUTTON 
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
  */
  return (
    <div>
      <h1>TEST PAGE</h1>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
