const mongoose = require('mongoose')

const IncomeSchema = mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        max:9999999
    },
    type:{
        type:String,
        required:true,
        default:"income"
    },
    date:{
        type:Date,
        default:Date.now
    },
    category:{
        type:String,
        required:true,
        maxLength:50
    },
    description:{
        type:String,
        maxLength:150
    }

},{timestamps:true})


module.exports = mongoose.model('Income',IncomeSchema);