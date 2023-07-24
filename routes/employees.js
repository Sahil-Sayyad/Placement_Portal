//import requried packeges
const express = require('express');
const router = express.Router();

//home controller for home page 
const employeeController = require('../controllers/employee_Controller');

router.get('/sign-up', employeeController.signUp);
router.post('/create', employeeController.create);
module.exports= router;