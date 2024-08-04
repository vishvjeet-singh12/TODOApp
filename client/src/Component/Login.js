import React, { useContext, useState } from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom";
import "./Login.css";
import { UserContext } from '../Store/Context';
const Login = () => {
  const [input,setInput]=useState({
    email:"",
    password:""
  })
  const {serverTokenLs}=useContext(UserContext);
  const navigate=useNavigate();
    const handleChange=(event)=>{
      let name=event.target.name;
      let value=event.target.value;
      
      setInput({
        ...input,
        [name]:value
      })
    }
   const handleSubmit=async(e)=>{
    e.preventDefault();
     try {
      const response=await fetch(`http://localhost:3000/api/logintodo`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(input),
        credentials:"include"
      })
      const data=await response.json().then((result)=>{
        console.log(result.message);
          if(response.status === 200){
            console.log(result.message);
            alert(result.message);
            if(result.message === "Successfully Loggedin"){
              serverTokenLs(result.token);
              navigate("/todoapp")
            }
            else if(result.message === "User is not Exist" || result.message === "Invalid Email or Password"){
              setInput({email:"",password:"" })
            }
          }
      })
     } catch (error) {
      console.log(error);
     }
   }
  return (
    <div
      className="loginform"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=600)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="background"></div>
      <div className="login-container" id="loginContainer">
        <div className="login-header">
          <h2>
            Welcome to <span>TO-DO App</span>
          </h2>
          <p style={{ fontWeight: "bold" }}>Login to your account</p>
        </div>
        <div className="login-form">
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={(e)=>{
                   handleChange(e)
                }}
                value={input.email}
                required
                style={{fontWeight:"bold",fontSize:"15px"}}
              />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e)=>{
                  handleChange(e)
               }}
               value={input.password}
                required
                style={{fontWeight:"bold",fontSize:"15px"}}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="signup-link" style={{fontWeight:"bold"}}>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
export default Login;
