const mongoose = require("mongoose");

const facultySchema = mongoose.Schema(
  {
    faculty_name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", facultySchema);
