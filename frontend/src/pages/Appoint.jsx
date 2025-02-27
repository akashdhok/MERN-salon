import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BASE_URL from '../config'
import { toast , ToastContainer } from 'react-toastify'
const Appoint = () => {
    const {id} = useParams()
    const[webInfo , setWebInfo] = useState({})
    const[input , setInput] = useState({})
    const loadData = async()=>{
        let api = `${BASE_URL}/consumer/webInfo/?id=${id}`
        try {
            let res = await axios.get(api)
            setWebInfo(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadData()
    },[])
    const changeHandler = (e)=>{
     let{name , value} = e.target;
     setInput({
        ...input,
        [name] : value
     })
    }
    const submitHandler = async(e)=>{
        e.preventDefault()
          let api = `${BASE_URL}/consumer/insert`
        try {
            let res = await axios.post(api , {salonid : id , ...input })
            console.log(res)
            toast.success(res.data)

        } catch (error) {
           console.log(error) 
        }
    }
  return (
    <>
  
     <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center", background: "#f5f5f5", padding: "20px" }}>
          <div style={{ width: "100%", maxWidth: "500px", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
          <h3 align = "center" style={{color : "lightblue"}}> Your Salon  : {webInfo.name}</h3>
    <h3 align = "center" style={{color : "lightblue"}}> Salon Email  : {webInfo.email}</h3>
    <h3 align = "center"style={{color : "lightblue"}}> Salon Number  : {webInfo.number}</h3>

            <h1 style={{ textAlign: "center", color: "#007bff", marginBottom: "20px" }}>
              Book Appointment
            </h1>
    
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <img src="./logo.png" alt="Logo" width="80px" />
            </div>
    
            <form>
              <div className="mb-3">
                <label className="form-label">Enter Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter customer name" onChange={changeHandler} />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Enter Email</label>
                <input type="email" className="form-control" name="email"  placeholder="Enter customer email" onChange={changeHandler} />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Enter Address</label>
                <input type="text" className="form-control" name="address"  placeholder="Enter customer address" onChange={changeHandler}/>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Enter Appointment Date</label>
                <input type="date" className="form-control" name="date"  placeholder="Enter Appointment date" onChange={changeHandler}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Appointment Time</label>
                <input type="time" className="form-control" name="time"  placeholder="Enter Appointment time" onChange={changeHandler}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Enter Number</label>
                <input type="text" className="form-control" name="number"  placeholder="Enter customer number" onChange={changeHandler}/>
              </div>
              <button className="btn btn-primary w-100" onClick={submitHandler}>Submit</button>
            </form>
          </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default Appoint