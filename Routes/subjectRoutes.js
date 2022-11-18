const express = require("express");
const { postSubject, getSubject } = require("../Controllers/subjectController");

const router = express.Router();

router.post("/postsubject", postSubject);
router.get("/subjects", getSubject);

module.exports = router;
