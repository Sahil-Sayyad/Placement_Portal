//import the required packegs
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Employee = require("../models/employee");

//authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },

    async function (req, email, password, done) {
      let employee = await Employee.findOne({ email: email });
      if (!employee || employee.password != password) {
        // req.flash('error', 'Invalid Username / Password  ');
        console.log("Invalid Username / Password  ");
        return done(null, false);
      }

      return done(null, employee);
    }
  )
);

//serializing the employee to decide which key is to be kept in the cookies
passport.serializeUser(function (employee, done) {
  done(null, employee.id);
});

//deserializing the employee from the key in the cookies
passport.deserializeUser(async function (id, doen) {
  let employeeID = await Employee.findById(id);
  if (!employeeID) {
    console.log("Error in config/passport-local");
    return;
  }

  return done(null, employeeID);
});

//check if employee is authenticated
passport.checkauthetication = function (req, res, next) {
  //if the employee is signed in then the pass on the request to next controller action.
  if (req.isAuthenticated()) {
    return next();
  }

  //if the employee is not singed in
  return res.redirect("/employees/sign-in");
};

passport.checkAuthecticatedEmployee = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.employee = req.employee;
  }

  next();
};

module.exports = passport;
