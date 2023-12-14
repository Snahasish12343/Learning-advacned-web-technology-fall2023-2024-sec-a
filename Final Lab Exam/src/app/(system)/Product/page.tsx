'use client'
import { useRouter } from "next/navigation"

export default function SyProductstem() {


  const router = useRouter();
  

  const ApplyCrud = () => {
    router.push("/Product/ApplyCrud");
   
  }

  const Management = () => {
    router.push("/product/Management");
   
  }




  return (
    <div>
      <br></br>
      <button onClick={ApplyCrud}>Crud Operation</button>
      <br></br>
      <br></br>
      <button onClick={Management}>Product Management</button>
      
    </div>
  )
}
