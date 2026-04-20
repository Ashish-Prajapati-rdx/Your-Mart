import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  createProductsBulk,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.post("/bulk", createProductsBulk);

export default router;
