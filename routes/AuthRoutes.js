const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getLoggedUser,
  forgotPassword,
  resetPassword
} = require("../controllers/AuthController");

// Protect route middleware
const { protect } = require("../middleware/auth");

// @baseURL = /api/v1/auth

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getLoggedUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
