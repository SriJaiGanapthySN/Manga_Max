const User = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
dotenv.config();

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let existinguser = await User.findOne({ email });
    if (existinguser) res.status(400).json({ message: "User already present" });

    const newUser = new User({ username, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    console.error("❌ Error while creating user:", e);
    res
      .status(500)
      .json({ message: "Error while creating user", error: e.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found. Check email." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const payload = {
      _id: user._id.toString(),
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {});

    res.status(200).json({
      message: "Login successful",
      token,
      user: payload,
    });
  } catch (e) {
    console.error("❌ Error during login:", e);
    return res
      .status(500)
      .json({ message: "Error while logging in", error: e.message });
  }
};
const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User fetched successfully", user: user });
  } catch (error) {
    res.status(500).json({
      message: "User doesn't Exist",
    });
  }
};

module.exports = { createUser, loginUser, getCurrentUser };
