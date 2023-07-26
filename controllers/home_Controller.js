//import all required packages
const Employee = require("../models/employee");
module.exports.home = async (req, res) => {
  try {
    let employee = await Employee.find({});
    return res.render("home", {
      title: "Placement Cell",
    });
  } catch (err) {
    console.log(`error in home controller ${err}`);
    return;
  }
};
