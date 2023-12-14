'use client'
import { useRouter } from "next/navigation"

export default function Sales() {


  const router = useRouter();
  

  const Physical = () => {
    router.push("/Sales/Physical");
   
  }

  const Ecommerce = () => {
    router.push("/Sales/Ecommerce");
   
  }

  const Social = () => {
    router.push("/Sales/Social");
   
  }


  return (
    <div>
      <br></br>
      <button onClick={Physical}>Physical Store</button>
      <br></br>
      <br></br>
      <button onClick={Social}>Social Media</button>
      <br></br>
      <br></br>
      <button onClick={Ecommerce}>Ecommerce Sites</button>
      
    </div>
  )
}
