import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Store/Context'
import { Navigate } from 'react-router-dom';

const LogoutUser = () => {
    const {LogoutUser}=useContext(UserContext);
    useEffect(()=>{
        LogoutUser();
    },[LogoutUser]);
  return (
    <Navigate to="/"/>
  )
}

export default LogoutUser
