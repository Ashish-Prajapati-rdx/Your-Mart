import Product from "../models/Product.js";

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE product (test)
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: "iPhone 13",
      price: 69999,
      image: "https://inventstore.in/wp-content/uploads/2024/07/63.webp",
      description: "Latest Apple smartphone",
      countInStock: 10,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProductsBulk = async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
