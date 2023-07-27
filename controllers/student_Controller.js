//import required packages
const Student = require("../models/student");

//list the all students (view all students)
module.exports.allStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return res.render("student", { students });
  } catch (err) {
    console.log(`Error in view all students controller ${err}`);
    return;
  }
};


//Add new student (from to create a student )
module.exports.create = async (req, res) => {
  try {
    await Student.create(req.body);
    req.flash('success', 'Student Added Successfully');
    return res.redirect("/students");
  } catch (err) {
    console.log(`Error in create student controller ${err}`);
    return;
  }
};
