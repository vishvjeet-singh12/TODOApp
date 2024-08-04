import React, { useReducer, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import "./TodoMApp.css"
import { Link } from 'react-router-dom';

// let expense=[
//   {
//     title:"Ghee",
//     date:"30-06-2024",
//     amount:"500"
//   }
// ];
// const reducerMethod=(currList,action)=>{
//   let newCurrList=currList;
//    if(action.type === "New_List"){
//       newCurrList=[{
//         id:Date.now(),
//         title:action.payload.title,
//         date:action.payload.date,
//         amount:action.payload.amount
//       },...currList]
//    }
//    else if(action.type === "Delete_List"){
//       newCurrList=currList.filter((item)=>{
//         return item.id !== action.payload.itemid
//       })
//    }
//    return newCurrList
// }
const TodoMApp = () => {
  // const [todoitems,dispatchItems]=useReducer(reducerMethod,expense);
  //    const addItem=(item)=>{
  //          let addItems={
  //         type:"New_List",
  //         payload:{
  //           title:item.title,
  //           date:item.date,
  //           amount:item.amount
  //         }}
  //       dispatchItems(addItems)
  //     } 
  //   const deleteItem=(itemid)=>{
  //      let remainingItem={
  //       type:"Delete_List",
  //       payload:{
  //         itemid:itemid
  //       }
  //   }
  //    dispatchItems(remainingItem);
  // }
  return (
    <div style={{backgroundSize:"100%",padding:"0px 0px 40px 0px"}}>
    <div style={{backgroundColor:"lightblue",padding:"15px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{width:"58%",textAlign:"right"}}>Welcome in TODO-APP</h1>
      <div style={{width:"40%",textAlign:"right"}}>
       <button style={{width:"30%"}}><Link to="/logout" style={{textDecoration:"none",color:"white"}}>Logout</Link></button>
      </div>
    </div>
    <div className='expenses'>
    <div>
      <TodoForm/>
      <div>
      <TodoList />
      </div>
      </div>
    </div>
    </div>
  )
}

export default TodoMApp
