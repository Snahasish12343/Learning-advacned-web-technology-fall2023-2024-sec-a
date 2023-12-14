
        'use client'
        import { useRouter } from "next/navigation"
        
        export default function HomeDashboard() {
        
        
          const router = useRouter();
          
        
          const Sales = () => {
            router.push("/Sales");
           
          }
        
          const Product = () => {
            router.push("/Product");
           
          }
        
        
        
          return (
            <div>
              <br></br>
              <h1>This is Home DashBoard</h1>
              <br></br>
              <br></br>
              <button onClick={Sales}>System Sales</button>
              <br></br>
              <br></br>
              <button onClick={Product}>Product Management</button>
              <br></br>
              <br></br>
              <button onClick={Product}>Product Management</button>
              
            </div>
          )
        }
        