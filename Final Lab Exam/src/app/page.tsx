'use client'
import { useRouter } from "next/navigation"

export default function Home() {


  const router = useRouter();
  

  const Login = () => {
    router.push("/Login");
   
  }

  const Signup = () => {
    router.push("/Signup");
   
  }



  return (
    <div>
      <br></br>
      <button onClick={Login}>Log In</button>
      <br></br>
      <br></br>
      <button onClick={Signup}>Sign Up</button>
      
    </div>
  )
}
