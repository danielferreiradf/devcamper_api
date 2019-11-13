const router = require("express").Router();
const { registerUser } = require("../controllers/AuthController");

// @baseURL = /api/v1/auth

router.post("/register", registerUser);

module.exports = router;
