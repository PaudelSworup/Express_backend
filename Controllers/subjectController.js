const Subject = require("../models/subjectModel");

exports.postSubject = async (req, res) => {
  Subject.findOne({ code_no: req.body.code_no }, async (error, data) => {
    if (data) {
      return res.status(400).json({ error: "Subject code already exist" });
    }

    let subject = new Subject({
      code_no: req.body.code_no,
      book_name: req.body.book_name,
      faculty: req.body.faculty,
      semester: req.body.semester,
    });

    subject = await subject.save();

    if (!subject) {
      res.status(400).json({ error: "Something went wrong" });
    }
    res.send(subject);
  });
};

exports.getSubject = async (req, res) => {
  let subject = await Subject.find().populate("faculty").populate("semester");
  if (!subject) {
    res.status(400).json({ error: "Something went wrong" });
  }
  res.status(200).json(subject);
};
