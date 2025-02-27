const webModel = require("../model/webModel")
const consumerModel = require("../model/consumerModel")

const registerData = async (req, res) => {

    let {name,email,address,number,rating,  password} = req.body;
   try {
    let Data = await webModel.create({
        name : name,
        email : email,
        address : address,
        number : number,
        rating : rating,
        password : password
    })
    res.status(200).send(Data)
   } catch (error) {
    res.status(400).send(error)
   }
}
const displayData = async(req , res)=>{
    try {
        const data = await webModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
const loginData = async(req ,res)=>{
    const {email , password} = req.body;
    try {
        let data = await webModel.findOne({email : email})
        if(!data)
        {
            res.status(400).send("invalid email")
        }
        if(data.password !=password)
        {
            res.status(400).send("invalid password")

        }
        res.status(200).send(data)

    } catch (error) {
        
    }
}
const searchData = async(req , res)=>{
    let {name} = req.body
    try {
        let data = await webModel.find({name : name})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
const getAppointmentData = async(req , res)=>{
    const{salonid} = req.query;
    try {
        let data = await consumerModel.find({salonid : salonid})
        res.status(200).send(data)
    } catch (error) {
        console.log(error   )
    }
}
module.exports = {
    registerData,
    displayData,
    loginData,
    searchData,
    getAppointmentData
}