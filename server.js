const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Route Files
const BootcampsRoutes = require("./routes/BootcampsRoutes");

// Load env file
dotenv.config({ path: "./config/config.env" });

// Express App
const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/bootcamps", BootcampsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
