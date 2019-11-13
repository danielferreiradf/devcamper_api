const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getLoggedUser
} = require("../controllers/AuthController");

// Protect route middleware
const { protect } = require("../middleware/auth");

// @baseURL = /api/v1/auth

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getLoggedUser);

module.exports = router;
