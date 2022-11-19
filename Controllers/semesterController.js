const Semester = require("../models/semesterModel");

exports.semester = async (req, res) => {
  let semester = new Semester(req.body);
  Semester.findOne(
    { semester_num: semester.semester_num },
    async (err, data) => {
      if (data === null) {
        semester = await semester.save();

        if (!semester) {
          return res.status(400).json({ error: "Something went wrong" });
        }
        res.status(200).send(semester);
      } else return res.status(400).json({ error: "semester already exist" });
    }
  );
};

exports.getSemester = async (req, res) => {
  const semester = await Semester.find();

  if (!semester) {
    res.status(400).json({ error: "Something went wrong" });
  }
  res.status(200).send(semester);
};
