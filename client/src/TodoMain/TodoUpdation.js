import React, { useContext, useEffect, useState } from 'react'
import "./TodoUpdation.css";
import { UserContext } from '../Store/Context';
import { json, useNavigate, useParams } from 'react-router-dom';
const TodoUpdation = () => {
    const [inputData,setInputData]=useState({
     title:"",
     date:"",
     amount:""
    })
    const {Authorization}=useContext(UserContext);
    const params=useParams();
    const navigate=useNavigate();

     const getData=async()=>{
         try {
             const response=await fetch(`http://localhost:3000/api/data/edit/${params.id}`,{
                method:"GET",
                headers:{
                    "Authorization":Authorization
                }
             })
             const data=await response.json().then((result)=>{
                console.log(result.DatasDetail);
                if(response.status === 200){
                    console.log(result.DatasDetail);
                    setInputData(result.DatasDetail);
                }
             })
         } catch (error) {
            console.log(error);
         }
     }
     useEffect(()=>{
        getData();
     },[])

     const handleSubmit=async(e)=>{
          e.preventDefault();
          try {
             const response=await fetch(`http://localhost:3000/api/data/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Authorization":Authorization,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(inputData),
                credentials:"include"
             })
             const data=await response.json().then((result)=>{
                
                if(response.status === 200){
                    console.log(result.message);
                    alert(result.message)
                       navigate("/todoapp")
                }
                else{
                    alert("Updation Rejected");
                }
             })
          } catch (error) {
            console.log(error);
          }
     }
     const handleChange=(event)=>{
          let name=event.target.name;
          let value=event.target.value;

          setInputData({
            ...inputData,
            [name]:value
          })
     }
  return (
    <section className="AdminUpdate" style={{padding:"30px 0px 30px 0px"}}>
    <div className="UpdateContainer">
       <div>
         <h1 style={{textAlign:"center",color:"sandybrown"}}>UPDATE DATA</h1><hr></hr>
       </div>
         <div className="UpdateForm">
            <form onSubmit={handleSubmit}>
               <label>Title</label>
               <input className="input" type="text" placeholder='Enter Title' name="title" value={inputData.title}  onChange={(event)=>{
                handleChange(event);
               }}
               style={{width:"90%",fontSize:"14px",fontWeight:"bold"}}/>
               <br/><br/>
               
               <label>Date</label>
                 <input className="input" placeholder='date' style={{backgroundColor:"white",padding:"15px",width:"90%",fontSize:"14px",fontWeight:"bold"}} 
                 type="date" name="date" value={inputData.date}  onChange={(event)=>{
                    handleChange(event);
              }}
              />
              <br/><br/>
                  <label>Amount</label>
                 <input className="input"  placeholder='Amount' type="text" name="amount" value={inputData.amount}  onChange={(event)=>{
                    handleChange(event);
              }}
               style={{width:"90%",fontSize:"14px",fontWeight:"bold"}}
              /><br/><br/>
                 <button >Update</button>
            </form>
         </div>
    </div>
 </section>
  )
}

export default TodoUpdation
