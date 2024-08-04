import React from 'react'
import {Routes,Route} from "react-router-dom"
import Topnav from './Component/Topnav'
import Welcome from './Component/Welcome'
import Login from './Component/Login'
import Register from './Component/Register'
import TodoMApp from './TodoMain/TodoMApp'
import LogoutUser from './Component/LogoutUser'
import TodoUpdation from './TodoMain/TodoUpdation'
const App = () => {

  return (
    <div style={{
      backgroundImage:"url(https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=600)",backgroundRepeat:"no-repeat",backgroundSize:"100%",backgroundAttachment:"fixed"
    }}  >
    <Routes>
   <Route path='/' element={<Topnav/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/logout' element={<LogoutUser/>}/>
      <Route path='/todoapp' element={<TodoMApp/>}/> 
      <Route path='/todoapp/edit/:id' element={<TodoUpdation/>}/>
</Routes>
</div>
  )
}

export default App
