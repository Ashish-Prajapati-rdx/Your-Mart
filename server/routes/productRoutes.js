import express from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts); // 🔥 important
router.post("/", createProduct);

export default router;
