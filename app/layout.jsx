import './globals.css'
// import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Quicksand } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Courier_Prime } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })
const courier = Courier_Prime({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Jason Zhu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <Nav></Nav>
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html lang="en" className={quicksand.className}>
      {/* <body className={inter.className}>{children}</body> */}
      <body className='bg-black'>
      {/* style={{ backgroundImage: "url(/images/mistymountain.jpeg" }} */}
        <div className="main">
          <div className="" /> {/*gradient */}
        </div>

        <main className="app">
          <Nav />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  )
}
