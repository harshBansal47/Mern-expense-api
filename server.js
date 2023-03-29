const express = require('express');
const cors = require('cors');
const Auth_router = require('./Routes/AuthRoutes')
const {PORT} = require('./Config/Config');
const ConnectDb = require('./Config/Db.config')
const app = express();

//cors is taken as middleware to allow cross origin resourse sharing
app.use(cors())
//json middleware for parsing json data from post request
app.use(express.json())

//Router for handleling routes
app.use('/api/auth',Auth_router)

//Connection to database
ConnectDb()

//server running on port
app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})