const express = require("express")
const route = express.Router()
const webController = require("../controller/webController")
route.post("/register" , webController.registerData )
route.get("/display" , webController.displayData)
route.post("/login" , webController.loginData)
route.post("/search" , webController.searchData)
route.get("/getdata" , webController.getAppointmentData)

module.exports = route