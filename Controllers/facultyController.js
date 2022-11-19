const Faculty = require("../models/facultyModel");

// to post a faculty name #unique faculty name
exports.postFaculty = async (req, res) => {
  let faculty = new Faculty(req.body);
  Faculty.findOne(
    { faculty_name: faculty.faculty_name },
    async (error, data) => {
      if (data === null) {
        faculty = await faculty.save();

        if (!faculty) {
          return res.status(400).json({ error: "Something went wrong" });
        }
        res.send(faculty);
      } else {
        res.status(400).json({ error: "Faculty name already exist" });
      }
    }
  );
};

exports.getFaculty = async (req, res) => {
  const faculty = await Faculty.find();
  if (!faculty) {
    res.status(400).json({ error: "Something went wrong" });
  }
  res.status(200).json(faculty);
};
