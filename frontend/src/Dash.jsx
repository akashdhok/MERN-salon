import React from 'react'
import Dashboard from './pages/Dashboard'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Dash = () => {
  return (
    <>
    <Dashboard/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Dash