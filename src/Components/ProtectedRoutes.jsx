import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({Component}) => {
    const navigate= useNavigate()
    
    useEffect(() => {
        if((!localStorage.getItem("loginSucces"))){
          localStorage.setItem("loginSucces",false)
        }
        if((localStorage.getItem("loginSucces")==='false')){
            console.log(localStorage.getItem("loginSucces"))
            navigate("/")
        }
    });

  return (
    <div>
        <Component />
    </div>
  )
}

export default ProtectedRoutes