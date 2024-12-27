const express = require("express");
const User = require("../models/User");
const adminAuth = require("../middleware/admin");
const router = express.Router();

router.get("/users", adminAuth, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Admin put user
router.put("/users/:id", adminAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ message: "UUser not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Admin delete user
router.delete("/users/:id", adminAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: " user deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
