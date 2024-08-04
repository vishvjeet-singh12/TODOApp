import React, { useState } from 'react'
import "./TodoForm.css"
const TodoForm = ({addItem}) => {
  const[item,setItem]=useState({
       title:"",
       date:"",
       amount:""
  });
   const handleChange=(event)=>{
       let name=event.target.name;
       let value=event.target.value;

       setItem({
        ...item,
        [name]:value
       })
   };
     const handleSubmit=async(e)=>{
      e.preventDefault();
         console.log(item);
          //  addItem(item);
          //  item.amount="";item.date="";item.title="";
          try {
            const response=await fetch(`http://localhost:3000/api/data`,{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(item),
              credentials:"include"
            })
            const data=await response.json().then((result)=>{ 
                 if(response.status===200){
                  console.log(result.message);
                  alert(result.message)
                 }
            })
          } catch (error) {
            console.log(error);
          }
     }

  return (
    <form onSubmit={handleSubmit}>
    <div className="newExpenseControls">
      <div className="newExpenseControl">
      <label>Title</label>
      <input type="text" name="title" value={item.title} style={{height:"23px",marginTop:"1px"}} onChange={(event)=>{
        handleChange(event)
        }}/>
      </div>
      <div className="newExpenseControl">
      <label>Date</label>
      <input type="date" name="date" value={item.date} style={{backgroundColor:"white"}} onChange={(event)=>{
        handleChange(event)
      }}/>
      </div>
      <div className="newExpenseControl">
      <label>Amount</label>
      <input type="number" name="amount" value={item.amount} style={{backgroundColor:"white"}}   onChange={(event)=>{
        handleChange(event)
      }}/>
      </div>
    </div>
    <div className="newExpenseActions">
    <button type="submit" style={{width:"30%"}}>Add Expense</button>
    </div>
    </form>
  )
}

export default TodoForm
