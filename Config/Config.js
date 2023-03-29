//configuring dotenv with process.env
const dotenv = require('dotenv')
dotenv.config()

//creaing a env object
const env = process.env;

const PORT = env.PORT;
const MONGO_URI = env.MONGO_URI;
const Secret_key = env.JWT_SECRET_KEY;

module.exports = {PORT,MONGO_URI,Secret_key};