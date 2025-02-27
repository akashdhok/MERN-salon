const mongoose = require("mongoose")

const consumerSchema = new mongoose.Schema({
    name : String,
    email : String,
    address : String,
    date : String,
    time : String,
    number : String,
    salonid : {
        type : mongoose.Schema.ObjectId,
        ref : "web"
    }
})

module.exports = mongoose.model("consumer" , consumerSchema)