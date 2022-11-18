const mongoose = require("mongoose");

const semesterSchema = mongoose.Schema(
  {
    semester_num: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Semester", semesterSchema);
