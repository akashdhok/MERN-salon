const express  = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")
const Port  = process.env.PORT ||8000
const webroute = require("./routes/webRoute")
const consumerRoute = require("./routes/consumerRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
try {
    console.log("DB Connected")
} catch (error) {
    console.log(error)
}
})

app.use("/lookbooker" , webroute)
app.use("/consumer" , consumerRoute)
app.listen(Port , ()=>{
    console.log(`listening at the port of ${Port}`)
})