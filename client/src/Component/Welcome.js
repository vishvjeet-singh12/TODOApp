import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div style={{width:"50%",textAlign:"center",color:"black",padding:"20px",backgroundColor:"rgba(255, 255, 255, 0.34)"}}>
      <h1 style={{fontSize:"40px"}}>Welcome to TO-DO List</h1><span><hr color='blac'/></span>
      <div style={{marginTop:"30px"}}>
      <p style={{fontSize:"20px",fontWeight:"bolder"}}>A to-do list is a list of tasks or activities that need to be 
      completed, typically organized in order of priority. It can be
       as simple as a handwritten list on a piece of paper or as
        sophisticated as a digital app with features</p>

         <div style={{marginTop:"30px",gap:"10px",display:"flex",justifyContent:"center"}}>
           <button style={{width:"30%"}}><Link to="/login" style={{textDecoration:"none",color:"white"}}>Login</Link></button>
           <button style={{width:"30%"}}><Link to="/register" style={{textDecoration:"none",color:"white"}}>Signup</Link></button>
         </div>
         </div>
    </div>
  )
}

export default Welcome
