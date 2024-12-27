const express = require("express");
const Product = require("../models/Product");
const adminAuth = require("../middleware/admin");
const router = express.Router();

// Admin: Add Product
router.post("/products", adminAuth, async (req, res) => {
  const { name, description, price, stock, category } = req.body;
  const newProduct = new Product({ name, description, price, stock, category });

  try {
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Admin: Update Product
router.put("/admin/products/:id", adminAuth, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Admin: Delete Product
router.delete("/admin/products/:id", adminAuth, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
