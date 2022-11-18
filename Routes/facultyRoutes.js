const express = require("express");
const { postFaculty, getFaculty } = require("../Controllers/facultyController");

const router = express.Router();

router.post("/postfaculty", postFaculty);
router.get("/faculty", getFaculty);

module.exports = router;
