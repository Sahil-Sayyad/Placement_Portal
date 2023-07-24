//import requried packeges
const Employee = require('../models/employee');
const brcypt =require('bcrypt');
const crypto = require('crypto');

//render sign-up page
module.exports.signUp = async (req, res) => {
    if (req.isAuthenticated()) {
      return res.redirect("/");
    }
    return res.render("sign_up", {
      title: "Placement Cell | Sign Up",
    });
  };
  
//get the sign up data and create new employee in db 
module.exports.create = async (req, res)=>{
    try{
     //check if the passeword and confrim password is correct 
     if(req.body.password != req.body.confirmPassword){
        // req.flash('error', 'Please Enter Correct Confirm Password');
        console.log('Password not matched');
        return res.redirect('back');
     }

     //check if the employee already exists 
     let employee = await Employee.findOne({email:req.body.email});

     //insert the new employee if the employee is not exist 
     if(!employee){

        employee = new Employee({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        });

        //hash the password before saving into database 
        const salt = await brcypt.genSalt(10);
        employee.password = await brcypt.hash(employee.password, salt);
        await employee.save();
     }else{
        //  req.flash('success', 'Email Already Exist Please Login');
         console.log(`employee already exist`);
         return res.redirect('/employee/sign-in');
     }
    

    }catch(err){
        console.log(`error in signup controller of employee ${err}`);
        return;
    }
} 