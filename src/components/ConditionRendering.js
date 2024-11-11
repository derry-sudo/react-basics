import { useState } from "react"


const ConditionRendering = () => {
   const [isLoggedIn, setIsLoggedIn] = useState (false)

   let message;

   if(isLoggedIn){
    message = <h1>Welcome, User</h1>
   }
   else{
    message = <h1>Please Login!</h1>
   }
   function handleLogin(){
    setIsLoggedIn(true)
   }
   return (
    <div>
        {
        isLoggedIn && <h1>Welcome, User</h1> 
        }
        <br/>

        <button onClick= {handleLogin}>Login</button>
    </div>
   )
}
export default ConditionRendering