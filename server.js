const express = require('express');
const dotenv= require('dotenv')
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object -> using this we can create server
const app= express() /*all the functionalities of express stored in app variable*/

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
//1-test route 
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require('./routes/authRoutes'));

//port
const PORT = process.env.PORT || 3000;/*you can write any numbr*/

//listen->to run application
app.listen(PORT, ()=>{
    console.log(`Node Server Running On ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`.bgBlue.white);
});
