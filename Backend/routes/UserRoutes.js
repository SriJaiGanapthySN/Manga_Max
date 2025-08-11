const router = require("express").Router();
const {
  createUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/UserController.js");
const authMiddleWare = require("../middleware/AuthMiddleware.js");

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/current", authMiddleWare, getCurrentUser);

module.exports = router;
