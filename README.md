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
-  <b> view the list of all students for a specific interview </b>
-  <b> mark a result status</b>
-  <b> External Jobs List </b>
-  <b> Download a complete CSV of all the data of students  </b>

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
-  <b> HTML </b>
-  <b> CSS </b>
-  <b> Tailwind CSS </b>
-  <b> EJS </b>
-  <b> JavaScript </b>

## Project Demo
-  <b> <i> Home Page  </i></b> <br><br>
![placement_cell_home](https://github.com/Sahil-Sayyad/Placement_Cell/assets/96423459/c624b796-9ba8-4518-80ee-3f291fbd9f49)
-  <b> <i> Students Details  Page  </i></b> <br><br>
![placement_cell_students](https://github.com/Sahil-Sayyad/Placement_Cell/assets/96423459/4d381ff6-486d-41db-a101-149261ee123d)
-  <b> <i> Interviews Details  Page  </i></b> <br><br>
![placement_Cell_interviews](https://github.com/Sahil-Sayyad/Placement_Cell/assets/96423459/d067085a-ec22-4bed-8555-37c627a1590e)
-  <b> <i> Interviews Company Details  Page  </i></b> <br><br>
![interview_company_details](https://github.com/Sahil-Sayyad/Placement_Cell/assets/96423459/66da0b3a-fed3-4c04-8590-275f71cee315)
-  <b> <i> Job Details  Page  </i></b> <br><br>
![placement_cell_jobs](https://github.com/Sahil-Sayyad/Placement_Cell/assets/96423459/053ac7b6-76ae-4385-9017-865762f38dce)
-  <b> <i> CSV File  </i></b> <br><br>
![placement_cell_CSV](https://github.com/Sahil-Sayyad/Placement_Cell/assets/96423459/5bbf9f1f-26d6-45fc-833d-a7c3e6ca1288)

## Author


- Name: Sahil Sayyad
- GitHub: <a><b>https://github.com/Sahil-Sayyad</a></b>
- Email: []
- Website: []
