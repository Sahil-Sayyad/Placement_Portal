// interview.js
const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  companyName: String,
  date: Date,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  results: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
      result: String,
    },
  ],
});

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
