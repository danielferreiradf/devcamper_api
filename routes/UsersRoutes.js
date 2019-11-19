const router = require("express").Router({ mergeParams: true });
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/UsersController");

const User = require("../models/User");

// Protect route middleware
const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

// @baseURL = /api/v1/courses

router.use(protect);
router.use(authorize("admin"));

router
  .route("/")
  .get(advancedResults(User), getUsers)
  .post(createUser);

router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
