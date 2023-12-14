import Link from "next/link";

const Signup = () => {
 

    return (
    
      <div>
   
      <h1>Signup</h1>
       
      <input type="text" placeholder="Name"/>
       
      <br/>
       
      <input type="text" placeholder="Email"/>
       
      <br/>

      <input type="text" placeholder="Gender"/>
       
      <br/>
       
      <input type="text" placeholder="Date of Birth"/>
       
      <br/>
      
      <input type="text" placeholder="Nationality"/>
       
       <br/>
        
       <input type="password" placeholder="Password"/>
        
       <br/>
       
       <div>
        <Link href='/Login'> Sign Up </Link>
    </div>
       
      </div>
    )
  }
  
  export default Signup;