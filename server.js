const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./database/connection");
const bodyparser = require("body-parser");

const morgan = require("morgan");

const facultyRoutes = require("./Routes/facultyRoutes");
const semesterRoutes = require("./Routes/semesterRoutes");
const subjectRoutes = require("./Routes/subjectRoutes");

// middleware
app.use(bodyparser.json());
app.use(morgan("dev"));

// route middleware
app.use("/api", facultyRoutes);
app.use("/api", semesterRoutes);
app.use("/api", subjectRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
