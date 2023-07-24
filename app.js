//import all required packages
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000


//start the server 
app.listen(port, (err)=>{
    if(err){console.log(`Server Error ${err}`)};
    console.log(`Server is running on port ${port}`);
})  