"use client";

import Link from "next/link";


const Login = () => {
 
      
  return (
  
    <div>
 
    <h1>Login</h1>
     
    <input type="text" placeholder="Email"/>
   
     
    <br/>
     
    <input type="password" placeholder="Password"/>
     
    <br/>
     
    <div>
        <Link href='/HomeDashboard'> Log In </Link>
    </div>
    
    </div>
    
    
  )
}

export default Login;

