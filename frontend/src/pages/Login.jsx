import React, { useState } from 'react'
import BASE_URL from '../config'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let[data , setData] = useState({})
  let navigate = useNavigate()
  const changeHandler = (e)=>{
    let{name , value} = e.target;
    setData({
      ...data,
      [name] : value
    })
  }
  const submitHandler = async(e)=>{
    e.preventDefault()
    let api = `${BASE_URL}/lookbooker/login`
    try {
      let res = await axios.post(api , data)
      console.log(res.data)
      toast.success("Successfully LoggedIn..")
      navigate("/dash")
      localStorage.setItem("name" , res.data.name)
      localStorage.setItem("email" , res.data.email)
      localStorage.setItem("salonid" , res.data._id)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data)
      

    }
  }
  return (
   <>
     <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center", background: "#f5f5f5", padding: "20px" }}>
         <div style={{ width: "100%", maxWidth: "500px", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
           
           <h1 style={{ textAlign: "center", color: "#007bff", marginBottom: "20px" }}>
             Registered Salon Login
           </h1>
   
           <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
             <img src="./logo.png" alt="Logo" width="80px" />
           </div>
   
           <form>
           
             <div className="mb-3">
               <label className="form-label">Salon Email</label>
               <input type="email" className="form-control" name="email"  placeholder="Enter Salon email" onChange={changeHandler}  />
             </div>
             <div className="mb-3">
               <label className="form-label">Password</label>
               <input type="password" className="form-control" name="password" placeholder="Use strong password" onChange={changeHandler}   />
             </div>
   
             <button className="btn btn-primary w-100" onClick={submitHandler}>Submit</button>
           </form>
         </div>
       </div>
       <ToastContainer/>
   </>
  )
}

export default Login