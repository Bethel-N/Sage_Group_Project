const jwt = require("jsonwebtoken");
const User = require("../models/User");

const adminAuth = async (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.header("Authorization");

    // Check if header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // Extract token and trim whitespace
    const token = authHeader.replace("Bearer ", "").trim();
    if (!token) {
      return res.status(401).json({ message: "Access denied. Token missing." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user by ID
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Attach user to the request
    req.user = user;

    // Pass control to the next middleware
    next();
  } catch (err) {
    console.error("Error in adminAuth middleware:", err.message);
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = adminAuth;
