const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Secret_key} = require('../Config/Config');

const LoginController = async(req,res,next)=>{
    const {email,password} = req.body;
    try {
        //check if user exist
        let user = await User.findOne({email});
        if(!user){
            console.log("not found")
            return res.status(400).json({message:"Email is not registered"})
        }
        //compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            console.log('not matched')
            return res.status(400).json('invalid credentials')
        }
        //creating a jwt token
        const payload = {
            id:user._id
        }
        const token = jwt.sign(payload,Secret_key,{expiresIn:'1h'})
        res.status(200).json({user,token})

    } catch (error) {
        res.status(500).send('server error')
    }
}

module.exports = LoginController;