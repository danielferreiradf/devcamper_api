const router = require("express").Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require("../controllers/BootcampsController");

// @baseURL = /api/v1/bootcamps

// Include other resource routers
const courseRouter = require("./CoursesRoutes");

// Re-route into other resource routers - forwarding
router.use("/:bootcampId/courses", courseRouter);

router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

router.route("/:id/photo").put(bootcampPhotoUpload);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

module.exports = router;
