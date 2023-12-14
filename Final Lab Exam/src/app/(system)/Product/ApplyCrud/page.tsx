'use client'
import { useRouter } from "next/navigation"

export default function SyProductstem() {


  const router = useRouter();
  

  const Add = () => {
    router.push("/Product/Add/");
   
  }

  const Delete = () => {
    router.push("/product/Delete/");
   
  }

  const Update = () => {
    router.push("/product/Edit/");
   
  }

  const Read = () => {
    router.push("/product/Read/");
   
  }




  return (
    <div>
      <br></br>
      <button onClick={Add}>Add Product</button>
      <br></br>
      <br></br>
      <button onClick={Delete}>Delete Product</button>
      <br></br>
      <br></br>
      <button onClick={Update}>Edit A Existing Product</button>
      <br></br>
      <br></br>
      <button onClick={Read}>Read a product</button>
      <br></br>
      
    </div>
  )
}
