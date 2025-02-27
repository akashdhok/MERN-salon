import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import BASE_URL from "../config";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const[input , setInput] = useState({})
  const changeHandler = (e)=>{
    let{name , value} = e.target;
    setInput({
      ...input,
      [name] : value
    })
    
  }
  const SubmitHandler = async(e)=>{
    e.preventDefault()
    let api = `${BASE_URL}/lookbooker/register`
    try {
      let res = await axios.post(api , input)
      console.log(res)
      toast.success("Data Save")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center", background: "#f5f5f5", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "500px", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        
        <h1 style={{ textAlign: "center", color: "#007bff", marginBottom: "20px" }}>
          Register a New Salon
        </h1>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <img src="./logo.png" alt="Logo" width="80px" />
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">Salon Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter Salon name" onChange={changeHandler} />
          </div>

          <div className="mb-3">
            <label className="form-label">Salon Email</label>
            <input type="email" className="form-control" name="email"  placeholder="Enter Salon email" onChange={changeHandler} />
          </div>

          <div className="mb-3">
            <label className="form-label">Salon Address</label>
            <input type="text" className="form-control" name="address"  placeholder="Enter Salon address" onChange={changeHandler}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Salon Number</label>
            <input type="text" className="form-control" name="number"  placeholder="Enter Salon number" onChange={changeHandler}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Salon Rating</label>
            <div className="input-group">
              <span className="input-group-text"><FaStar color="gold" /></span>
              <select className="form-control" name="rating" onChange={changeHandler}>
                <option value="one">1 Star</option>
                <option value="two">2 Stars</option>
                <option value="three">3 Stars</option>
                <option value="four">4 Stars</option>
                <option value="five">5 Stars</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Use strong password" onChange={changeHandler} />
          </div>

          <button className="btn btn-primary w-100" onClick={SubmitHandler}>Submit</button>
        </form>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default Register;
