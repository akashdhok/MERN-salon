import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from "./pages/Home"
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import Login from './pages/Login'
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import DashHome from './pages/DashHome'
import Dash from './Dash'
import Appoint from './pages/Appoint'
import MyAppoint from './pages/MyAppoint'
import DashContact from './pages/DashContact'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout/>}>
       <Route index element = {<Home/>}/>
       <Route path='home' element = {<Home/>}/>
       <Route path='about' element = {<About/>}/>
       <Route path='search' element = {<Search/>}/>
       <Route path='contact' element = {<Contact/>}/>
       <Route path='login' element= {<Login/>}/>
       <Route path='registration' element = {<Register/>}/>
       <Route path='appoint/:id' element = {<Appoint/>}/>
       </Route>
    </Routes>
    <Routes>
      <Route path='dash' element = {<Dash/>}>
      <Route path='salonHome' element = {<DashHome/>}/>
      <Route index element = {<DashHome/>}/>
      <Route path='salonappoint' element = {<MyAppoint/>}/>
      <Route path='salocontact' element = {<DashContact/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App