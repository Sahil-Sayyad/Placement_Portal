//import requried packeges
const express = require('express');
const router = express.Router();

//home controller for home page 
const homeController = require('../controllers/home_Controller');

router.get('/', homeController.home);
router.use('/employees', require('./employees'));

module.exports= router;