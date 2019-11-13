const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/AuthController");

// @baseURL = /api/v1/auth

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
