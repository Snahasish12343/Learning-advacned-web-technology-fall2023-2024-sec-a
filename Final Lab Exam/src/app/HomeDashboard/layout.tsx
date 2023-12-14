import Link from "next/link";

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div>
        <ul>
            <li><Link href='/'>Log Out</Link></li>
        </ul>
        {children}
      </div>
    )
  }
  
  export default Layout;
  