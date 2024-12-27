const express = require("express");
const Product = require("../models/Product.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

//fech a single product  id
router.get("/:id", async (req, res) => {
  try {
    // Insert the sample products into the database
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/create", async (req, res) => {
  const { name, description, price, stock, category } = req.body;
  const newProduct = new Product({
    name,
    description,
    price,
    stock,
    category,
  });

  try {
    // Insert the sample products into the database
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
