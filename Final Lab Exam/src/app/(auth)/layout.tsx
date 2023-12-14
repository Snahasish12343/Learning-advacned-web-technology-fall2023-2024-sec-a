import Link from "next/link";

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div>
        <ul>
            <li><Link href='/Login'>Login</Link></li>
            <li><Link href='/Signup' replace>Signup</Link></li>
            <li><Link href='/HomeDashboard'>Home</Link></li>
        </ul>
        {children}
      </div>
    )
  }
  
  export default Layout;
  