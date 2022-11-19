const express = require("express");
const { semester, getSemester } = require("../Controllers/semesterController");
const router = express.Router();

router.post("/postsemester", semester);
router.get("/semesters", getSemester);

module.exports = router;
