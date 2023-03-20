import { useState } from "react"
import "./Login.css"
import Stack from '@mui/material/Stack';
import {  useNavigate } from "react-router-dom";

function Login() {

  const [name, setname] = useState({})
  const navigate= useNavigate()
  function submits(event) {
    event.preventDefault();
    console.log(name)
    if(name.pass === 'admin'){
      localStorage.setItem("loginSucces", true)
      navigate('/home')
    }else{
      alert('please enter valid email and password')
    }
  }
  function change(value,names){
    let data = {[names] : value}
    setname({...name, ...data})

  }
  return (
    <Stack className="maincont" direction='row' sx={{xs:'column',width:"100%",height:"100vh"}}>
      <div className="left" >
        <div className="text">
          <h1> Welcome back to </h1>
          <h1>Pretty Login</h1>
        </div>
        <p className="para">Its great to have you back</p>
        <form  onSubmit={submits}>
          <label htmlFor="">Email</label>
          <input type="email" className="emi" name="email" onChange={(e) => change(e.target.value,e.target.name) }  />
          <label htmlFor="">Password</label>
          <input type="password" className="pass" name='pass'  onChange={(e) => change(e.target.value,e.target.name) }  />
          <div className="checkbox">
            <div className="checks">
              <input type="checkbox" className="check"/>

              Remember me?
              {/* <label htmlFor="">
              </label> */}
            </div>
            Forgot password ?
          </div>
          <div className="butts">
            <button type='submit' className="submit">Login</button>
            <button className="reg" >Create Account</button>
          </div>

        </form>
        <div className="bott">
          <p>Or Login with</p>
          <div className="soc">

          <h4>Facebook</h4>
          <h4>Google</h4>
          </div>
        </div>

     

      </div>

        <div className="right">
        </div>
    </Stack>
  )
}

export default Login