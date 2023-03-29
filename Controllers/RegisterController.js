//importing database model
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {Secret_key} = require('../Config/Config');


const RegistrationController = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {

    //check if user already exist
    let user = await User.findOne({email});
    if (user) {
      return res.status(400).json({ message: "User Already exists" });
    }


    //create a new user
    const   Newuser = new User({ name, email, password });
    //Hashing the password for security
    const salt = await bcrypt.genSalt(10);
    Newuser.password = await bcrypt.hash(password,salt);
    //saving new user to database
    await Newuser.save();
    //generate jwt token
    const payload = {
         id:Newuser._id
    }
    const token = jwt.sign(payload,Secret_key,{expiresIn:'1h'})
    res.status(201).json({Newuser,token})
    
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = RegistrationController;