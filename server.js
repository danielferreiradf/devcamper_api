const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/db");

// Route Files
const BootcampsRoutes = require("./routes/BootcampsRoutes");

// Load env file
dotenv.config({ path: "./config/config.env" });

// Express App
const app = express();

// Body parser
app.use(express.json());

// Connect Database
connectDB();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/bootcamps", BootcampsRoutes);

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
