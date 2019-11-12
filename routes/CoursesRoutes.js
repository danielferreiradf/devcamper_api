const router = require("express").Router({ mergeParams: true });
const {
  getCourses,
  getCourse,
  addCourse
} = require("../controllers/CousesController");

router
  .route("/")
  .get(getCourses)
  .post(addCourse);

router.route("/:id").get(getCourse);

module.exports = router;
