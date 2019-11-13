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

const Bootcamp = require("../models/Bootcamp");
const advancedResults = require("../middleware/advancedResults");

// @baseURL = /api/v1/bootcamps

// Include other resource routers
const coursesRouter = require("./CoursesRoutes");

// Protect route middleware
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers - forwarding
router.use("/:bootcampId/courses", coursesRouter);

router
  .route("/")
  .get(advancedResults(Bootcamp, "courses"), getBootcamps)
  .post(protect, authorize("publisher", "admin"), createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, authorize("publisher", "admin"), updateBootcamp)
  .delete(protect, authorize("publisher", "admin"), deleteBootcamp);

router
  .route("/:id/photo")
  .put(protect, authorize("publisher", "admin"), bootcampPhotoUpload);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

module.exports = router;
