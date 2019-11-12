const router = require("express").Router({ mergeParams: true });
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
} = require("../controllers/CousesController");

// @baseURL = /api/v1/courses

router
  .route("/")
  .get(getCourses)
  .post(addCourse);

router
  .route("/:id")
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
