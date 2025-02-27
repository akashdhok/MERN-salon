import React from 'react';
import {Link, useNavigate} from "react-router-dom"
import Crousel from '../pages/Crousel';
const TopNav = () => {
   const navigate  = useNavigate()
  const registerSalon = ()=>{
    navigate("/registration")
  }
  const loginSalon = ()=>{
    navigate("/login")
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./logo.png" alt="Logo" width="100px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link active"  to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="search">Search Salon</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-success" onClick={registerSalon}>Salon Registration</button>
          <button className="btn btn-outline-success ms-2" onClick={loginSalon}>Salon Login</button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default TopNav;