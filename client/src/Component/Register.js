import React, { useState } from 'react'
import {Link, json, useNavigate} from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [inputdata,setInputdata]=useState({
    username:"",
    email:"",
    password:"",
    mobile:""
  })
  const navigate=useNavigate();
    const handleChange=(event)=>{
      let name=event.target.name;
      let value=event.target.value;

      setInputdata({
        ...inputdata,
        [name]:value
      })
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(inputdata)
      try {
         const response=await fetch(`http://localhost:3000/api/registertodo`,{
            method:"Post",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(inputdata),
            credentials:"include"
         })
         const data=await response.json().then((result)=>{
           console.log(result.message)
           if(response.status === 200){
            alert(result.message);
            if(result.message === "Successfully Registered" || 
              result.message === "User already exist"){
               navigate("/login");
            }}
            else{
              alert(result.extraDetails);
            }
         })
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div
    className="registercss"
    style={{
      backgroundImage:
        "url(https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=600)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundAttachment: "fixed",
    }}
  >
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label >
          <b>Username</b>
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={(e)=>{
            handleChange(e);
          }}
          value={inputdata.username}
          required
          style={{fontWeight:"bold",fontSize:"15px",width:"95%"}}
        />
        <label >
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email"
        name='email' 
        onChange={(e)=>{
          handleChange(e);
        }}
        value={inputdata.email}
        style={{fontWeight:"bold",fontSize:"15px",width:"95%"}}
        />

        <label >
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e)=>{
            handleChange(e);
          }}
          value={inputdata.password}
          style={{fontWeight:"bold",fontSize:"15px",width:"95%"}}
        />

        <label >
          <b>Phone Number</b>
        </label>
        <input type="phone" name="mobile"
        onChange={(e)=>{
          handleChange(e);
        }}
        value={inputdata.mobile}
        style={{fontWeight:"bold",fontSize:"15px",width:"80%"}} />
        <div className="clearfix">
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
        <div className="signup-link" style={{fontWeight:"bold"}}>
        Have an account? <Link to="/login">Sign in</Link>
      </div>
      </div>
    </form>
  </div>
  )
}

export default Register;
