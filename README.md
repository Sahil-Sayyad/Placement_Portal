# Placement Cell App

 <b> A company constantly needs to download their data to compile different reports. You need to create an
interface for the employees of this company to fill in the data into the database and then download it in CSV
format.Team Career Camp wants to maintain a database of all the student interviews [only for their own
use]. <b> 

## Table of Contents
-  <b> [Features](#features)</b>
-  <b> [Getting Started](#getting-started)</b>
-  <b> [Tech Stack](#Tech-Stack) </b>
-  <b> [Project Demo](#Project-Demo) </b>
-  <b> [Author](#Author)</b>

## Features
-  <b> Employees can Register </b>
-  <b> Employees can log in  </b>
-  <b> list the all students (view all students)</b>
-  <b> Employees can Add new student</b>
-  <b> list of interviews (view all interviews)</b>
-  <b> Employees can add new interview </b>
-  <b> Employees can Allocate a student to an interview</b>
-  <b> Lists all the reports of all the patients filtered by a specific status</b>

## Getting Started
-  <b> 1. &nbsp; Clone Git Repo  </b>
    <br>----<i> git clone https://github.com/Sahil-Sayyad/HospitalAPI.git </i><br><br>
-  <b> 2.  &nbsp;Install NPM dependencies </b>
   <br>----<i> npm install</i> <br><br>
-  <b> 3. &nbsp; Then simply start your app </b>
   <br>----<i>npm start </i><br><br>


### Prerequisites
- <b>NodeJs Any Version</b>

### Usage
<b>Instructions how to use this Hospital API Routes </b> <br><br>
-  <b> 1. &nbsp; /doctors/register&nbsp;&nbsp;  (method should be [POST] )</b>
    <br>----<i> Fill data with email , name , password, confirmPassword . </i><br><br>
-  <b> 2. &nbsp; /doctors/login&nbsp;&nbsp;  (method should be [POST]) </b>
   <br>----<i>  Fill data with registered email and password. </i><br><br>
-  <b> 3. &nbsp; /patients/register&nbsp;&nbsp; (method should be [POST])  </b>
   <br>----<i>  Fill data with name , age, phone, address , regestered doctorEmail. </i><br><br>
-  <b> 4. &nbsp; /patients/:id/create_report &nbsp;&nbsp;(method should be [POST] ) </b>
   <br>----<i> Fill data with status , date and  status can be [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit] and send patient id in params.</i> <br><br>
-  <b> 5. &nbsp; /patients/:id/all_reports&nbsp;&nbsp; (method should be [GET]) </b>
   <br>----<i>  Only send the patient id in params. </i><br><br>
-  <b> 6. &nbsp; /reports/:id/status&nbsp;&nbsp; (method should be [GET]) </b>
   <br>----<i>  Fill data with status and send the patient id in params.</i> <br><br>


## Tech Stack

-  <b> Node.js</b>
-  <b> Express.js </b>
-  <b> Passport.js </b>
-  <b> MongoDB </b>
-  <b> Mongoose </b>
-  <b> Postman </b>
## Author

- Name: Sahil Sayyad
- GitHub: <a><b>https://github.com/Sahil-Sayyad</a></b>
- Email: []
- Website: []
