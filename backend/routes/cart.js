// const express = require("express");
// const Cart = require("../models/Cart");
// const router = express.Router();
// const authenticate = require("../middleware/auth"); // Ensure user is authenticated

// // Ensure the user is authenticated before using any cart-related routes
// router.use(authenticate);

// // Add a product to the cart
// router.post("/", async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;

//     if (!productId || !quantity) {
//       return res
//         .status(400)
//         .json({ message: "Product ID and quantity are required." });
//     }

//     // Check if the user already has a cart
//     let cart = await Cart.findOne({ user: req.user._id });

//     if (!cart) {
//       // If no cart exists, create a new cart
//       cart = new Cart({
//         user: req.user._id,
//         products: [{ product: productId, quantity }],
//       });
//     } else {
//       // If the cart already exists, add the product to the cart
//       const productIndex = cart.products.findIndex(
//         (item) => item.product.toString() === productId
//       );
//       if (productIndex >= 0) {
//         // If the product already exists, update its quantity
//         cart.products[productIndex].quantity += quantity;
//       } else {
//         // If it's a new product, add it to the cart
//         cart.products.push({ product: productId, quantity });
//       }
//     }

//     await cart.save();
//     res.status(201).json(cart);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding product to cart" });
//   }
// });

// // Get the user's cart
// router.get("/", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user._id }).populate(
//       "products.product"
//     );
//     res.json(cart ? cart.products : []);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Update the quantity of an item in the cart
// router.put("/:id", async (req, res) => {
//   const { quantity } = req.body;
//   try {
//     const cart = await Cart.findOne({ user: req.user._id });
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     const itemIndex = cart.products.findIndex(
//       (item) => item.product.toString() === req.params.id
//     );
//     if (itemIndex >= 0) {
//       cart.products[itemIndex].quantity = quantity;
//       await cart.save();
//       return res.json(cart.products[itemIndex]);
//     }
//     return res.status(404).json({ message: "Item not found in cart" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Remove an item from the cart
// router.delete("/:id", async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user._id });
//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     // Filter out the product with the specified ID
//     cart.products = cart.products.filter(
//       (item) => item.product.toString() !== req.params.id
//     );
//     await cart.save();
//     res.json(cart.products);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const router = express.Router();
const authenticate = require("../middleware/auth");

router.use(authenticate);

// Add a product to the cart
router.post("/", async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity <= 0) {
      return res.status(400).json({
        message: "Valid product ID and positive quantity are required.",
      });
    }

    const productExists = await Product.findById(productId);
    if (!productExists) {
      return res.status(404).json({ message: "Product not found." });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        products: [{ product: productId, quantity }],
      });
    } else {
      const productIndex = cart.products.findIndex(
        (item) => item.products.toString() === productId
      );
      if (productIndex >= 0) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res
      .status(500)
      .json({ message: "Error adding product to cart", error: error.message });
  }
});

// Get the user's cart
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "products.product",
      "name price image"
    );
    res.json(cart ? cart.products : []);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res
      .status(500)
      .json({ message: "Error fetching cart", error: error.message });
  }
});

// Update the quantity of an item in the cart
router.put("/:id", async (req, res) => {
  const { quantity } = req.body;
  try {
    if (!quantity || quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be a positive number." });
    }

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.products.findIndex(
      (item) => item.product.toString() === req.params.id
    );
    if (itemIndex >= 0) {
      cart.products[itemIndex].quantity = quantity;
      await cart.save();
      return res.json(cart.products[itemIndex]);
    }
    return res.status(404).json({ message: "Item not found in cart" });
  } catch (error) {
    console.error("Error updating item quantity:", error);
    res
      .status(500)
      .json({ message: "Error updating item quantity", error: error.message });
  }
});

// Remove an item from the cart
router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = cart.products.filter(
      (item) => item.product.toString() !== req.params.id
    );
    await cart.save();
    res.json(cart.products);
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res
      .status(500)
      .json({ message: "Error removing item from cart", error: error.message });
  }
});

module.exports = router;
