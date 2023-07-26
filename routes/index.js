//import requried packeges
const express = require("express");
const router = express.Router();
const passport = require("passport");

//home controller for home page
const homeController = require("../controllers/home_Controller");

router.get("/", passport.checkAuthentication, homeController.home);
router.use("/employees", require("./employees"));

module.exports = router;
