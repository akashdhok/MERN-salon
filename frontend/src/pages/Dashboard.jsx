import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
 
  let navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("name"))
    {
      navigate("/home")
    }
  })
const logout = ()=>{
    navigate("/home")
    localStorage.clear()
}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./logo.png" alt="Logo" width="100px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="salonHome">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="salonAppoint">
                  My Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="salocontact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline-success" onClick={logout}>Logout</button>
        </div>
      </nav>
      
    </>
  );
};

export default Dashboard;
