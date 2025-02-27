const mongoose = require("mongoose")
const webSchema = new mongoose.Schema({
    name : String,
    email : String,
    address : String,
    number : String,
    rating : String,
    password : String

})

module.exports = mongoose.model("web" , webSchema)