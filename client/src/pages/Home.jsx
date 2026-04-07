import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:5000/api/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
