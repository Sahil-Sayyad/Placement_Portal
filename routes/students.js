//import requried packeges
const express = require("express");
const router = express.Router();
const passport = require("passport");

const studentController = require("../controllers/student_Controller");

router.get('/', studentController.allStudents);
router.post('/create', studentController.create);
module.exports = router;
