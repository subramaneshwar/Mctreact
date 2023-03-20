import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './nav.css'
function Navbar() {
    const navigate= useNavigate()

  return (
    
    <div className='nav'>
        <NavLink  to='/home' className='links' >
            Home
        </NavLink>
        <NavLink  to='/products' className='links' >
            Products
        </NavLink>
        <NavLink  to='/user' className='links' >
            Users
        </NavLink>
        <NavLink  to='/contact' className='links' >
            Contact
        </NavLink>
        <button onClick={()=>{
            localStorage.setItem("loginSucces", false)
            navigate('/login')
        }} className='buts' >  Logout</button>
    </div>

  )
}

export default Navbar