const express = require("express")
const route = express.Router()
const consumerController = require("../controller/consumerController")
route.get("/webInfo" , consumerController.displayData)
route.post("/insert" , consumerController.insertData )

module.exports = route