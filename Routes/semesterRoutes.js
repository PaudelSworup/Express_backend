const express = require("express");
const { semester, getSemester } = require("../Controllers/semesterController");
const router = express.Router();

router.post("/postsemester", semester);
router.get("/semester", getSemester);

module.exports = router;
