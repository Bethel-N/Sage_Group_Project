const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
// Import routers
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const adminProductRoutes = require("./routes/adminProduct");
const adminUserRoutes = require("./routes/adminUser");
const cartRoutes = require("./routes/cart");

const app = express();

app.use(cookieParser());
app.use(express.json());
const corsOptions = { exposedHeaders: "Authorization" };
// Connect to Database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the e-commerce API ...");
});
app.use(cors(corsOptions));
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminUserRoutes);
app.use("/api/admin", adminProductRoutes);
app.use("/api/cart", cartRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// // Import routers
// const authRoutes = require("./routes/auth");
// const productRoutes = require("./routes/product");
// const adminProductRoutes = require("./routes/adminProduct");
// const adminUserRoutes = require("./routes/adminUser");
// const cartRoutes = require("./routes/cart");

// const app = express();

// // Middleware
// app.use(cors({ exposedHeaders: "Authorization" })); // CORS Middleware
// app.use(cookieParser()); // Parse cookies
// app.use(express.json()); // Parse JSON bodies

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => {
//     console.error("Database connection error:", err.message);
//     process.exit(1); // Exit on DB connection failure
//   });

// // Test route
// app.get("/", (req, res) => {
//   res.send("Welcome to the e-commerce API...");
// });

// // API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/admin/users", adminUserRoutes); // Distinct path for admin users
// app.use("/api/admin/products", adminProductRoutes); // Distinct path for admin products
// app.use("/api/cart", cartRoutes);
// app.use("/api/admin", adminUserRoutes);

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("Global error handler:", err.stack);
//   res
//     .status(err.status || 500)
//     .json({ message: err.message || "Internal Server Error" });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
