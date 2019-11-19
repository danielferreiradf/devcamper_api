const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const fileUpload = require("express-fileupload");
const cookierParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");

// Load env file
dotenv.config({ path: "./config/config.env" });

// Route Files
const BootcampsRoutes = require("./routes/BootcampsRoutes");
const CoursesRoutes = require("./routes/CoursesRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const UserRoutes = require("./routes/UsersRoutes");

// Express App
const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookierParser());

// Connect Database
connectDB();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// File uploading
app.use(fileUpload());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount Routes
app.use("/api/v1/bootcamps", BootcampsRoutes);
app.use("/api/v1/courses", CoursesRoutes);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/users", UserRoutes);

// ErrorHandler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Starts server
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server & exit process
  server.close(() => process.exit(1));
});
