const bodyParser = require("body-parser");
const express = require("express")
require("dotenv").config();
const app = express();
const database =  require("./database/database")

// connection database
database();

app.use(bodyParser());

app.listen(process.env.PORT,()=>{
    console.log(`server is running on Port ${process.env.PORT}`)
})