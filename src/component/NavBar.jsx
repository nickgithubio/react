import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <NavLink className="navbar-brand text-white fw-bold" to="/">KIET MCA</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div  id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li >
        <NavLink className="nav-link" to="/"      
           style= {({isActive})=>(isActive ? {color:"black"}:{color:"white"})}>

Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Card"
        style= {({isActive})=>(isActive ? {color:"black"}:{color:"white"})}>Card</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/counter"
        style= {({isActive})=>(isActive ? {color:"black"}:{color:"white"})}>Counter</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Languages"
        style= {({isActive})=>(isActive ? {color:"black"}:{color:"white"})}>Language</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/student"
        style= {({isActive})=>(isActive ? {color:"black"}:{color:"white"})}>Student</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/product"
        style= {({isActive})=>(isActive ? {color:"black"}:{color:"white"})}>Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about"
        style= {({isActive})=>(isActive ? {color:"black"}:{color:"white"})}>About Us</NavLink>
      </li>
    
      
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default NavBar