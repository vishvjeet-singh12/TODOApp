import React, { useContext, useEffect, useState } from 'react'
import "./TodoList.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../Store/Context';
import { Link } from 'react-router-dom';
const TodoList = ({allItems}) => {
  const [allData,setAllData]=useState([]);
  const {Authorization}=useContext(UserContext)

    const getAllData=async()=>{
          try {
               const response=await fetch(`http://localhost:3000/api/alldata`,{
                 method:"GET",
                 headers:{
                   "Authorization":Authorization
                 } 
               })
               const data=await response.json().then((result)=>{
                    console.log(result.message);
                    if(response.status === 200){
                         console.log(result.allData);
                         setAllData(result.allData);
                    }
               })
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(()=>{
         getAllData();
    },[])
    const deleteItem=async(id)=>{
        try {
            const response=await fetch(`http://localhost:3000/api/delete/${id}`,{
              method:"DELETE",
              headers:{
                "Authorization":Authorization
              }
            })
            const data=await response.json().then((result)=>{
                if(response.status===200){
                  console.log(result.message);
                  getAllData();
                }
            })
        } catch (error) {
          
        }
    }
  return (
    <>
    {allData.map((alldata)=>{
      return(
        <div className='expenseitem'>
        <h2 style={{fontSize:"20px"}}>{alldata.title}</h2>
        <div className='expensedescription'>
        <h3 style={{width:"25%",color:"white",fontSize:"20px"}}>{alldata.date}</h3>
        <div className='expenseprice'>{alldata.amount}</div>
        <button style={{padding:"5px",width:"18%"}}><Link to={`/todoapp/edit/${alldata._id}`} style={{textDecoration:"none"}}><EditIcon/></Link></button>
        <button style={{backgroundColor:"#30336b",borderRadius:"6px",color:"white",padding:"5px",width:"18%"}} onClick={()=>{
            deleteItem(alldata._id)
        }}><DeleteIcon/></button>
        </div>
       
       </div>
      )
    })}
    </>
  )
}

export default TodoList
