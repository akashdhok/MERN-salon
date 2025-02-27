const consumerModel = require("../model/consumerModel")
const webModel = require("../model/webModel")

const insertData = async(req , res)=>{
const{salonid , name , email , address , date , time , number} = req.body;

try {
    const data = await consumerModel.create({
        name : name,
        email : email,
        address : address,
        date : date,
        time : time,
        number : number,
        salonid : salonid 
    })
    res.status(200).send("Appointment Successfully..!!")
} catch (error) {
   res.status(400).send(error) 
}  
}
const displayData = async(req , res)=>{
    const {id} = req.query;
    try {
        let data = await webModel.findById(id)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    insertData ,
    displayData
}