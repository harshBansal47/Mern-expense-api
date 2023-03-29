const express = require('express')

//importing controllers
const {LoginController,RegistrationController} = require('../Controllers/Index')

//making Router using express
const Router = express.Router()

//Route handeller for registration form
Router.post('/register',RegistrationController)

//Route handeller for login form
Router.post('/login',LoginController)

module.exports = Router