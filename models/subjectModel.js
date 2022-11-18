const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const subjectSchema = mongoose.Schema(
  {
    code_no: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    book_name: {
      type: String,
      required: true,
      unique: true,
    },

    faculty: {
      type: ObjectId,
      required: true,
      ref: "Faculty",
    },

    semester: {
      type: ObjectId,
      required: true,
      ref: "Semester",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", subjectSchema);
