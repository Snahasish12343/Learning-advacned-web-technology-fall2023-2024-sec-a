import NavBar from "./components/Navbar"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: "lightgreen", padding: "5px"}}>Header
        <NavBar/>
        </header>
        {children}
        <footer style={{backgroundColor: "lightgray", padding: "5px"}}>Footer</footer>
      </body>
      
    </html>
  )
}