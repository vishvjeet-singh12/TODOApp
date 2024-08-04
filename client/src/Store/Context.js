import { createContext, useEffect, useState } from "react";

export const UserContext=createContext();

const UserContextList=({children})=>{
 const [token,setToken]=useState(localStorage.getItem("token"));
   const Authorization=`Bearer ${token}`;

 const serverTokenLs=(servertoken)=>{
    setToken(servertoken);
    return localStorage.setItem("token",servertoken);
 }
  const Loggedin=!!token;
  const LogoutUser=()=>{
       setToken("");
       return localStorage.removeItem("token");
  }
 const Authentication= async()=>{
      try {
           const response=await fetch(`http://localhost:3000/api/user`,{
              method:"GET",
              headers:{
                "Authorization":Authorization
              }
           })
           const data=await response.json().then((result)=>{
               console.log(result.message)
                if(response.status === 200){
                    console.log(result.user)
                }
            })
      } catch (error) {
        console.log(error);
      }
 }
   useEffect(()=>{
    Authentication();
   },[]);
    return <UserContext.Provider value={{serverTokenLs,LogoutUser,Authorization}}>{children}</UserContext.Provider>
}

export default UserContextList;