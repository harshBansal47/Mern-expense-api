const mongoose = require('mongoose')
const  { MONGO_URI }  = require("./Config") 

const ConnectDb = ()=>{
    mongoose.set("strictQuery", false)
    mongoose.connect(MONGO_URI).then(()=>{
        console.log('connection made to online db')
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = ConnectDb