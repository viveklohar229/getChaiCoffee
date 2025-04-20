"use client"
import { signOut, useSession } from "next-auth/react"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  const router = useRouter()


  useEffect(() => {


    if (!session) {
      router.push('/dashboard')
    }
    else {
      getData()
    }
  }, [])





  return (
   
    <nav className='bg-[#373636] shadow-lg shadow-white text-white flex justify-between items-center px-4 md:h-16 flex-col md:flex-row'>

      {/* Logo Section */}
      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
        <img className='invertImg' src="tea.gif" width={44} alt="" />
        <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai Or Coffee!</span>
      </Link>

      {/* Navigation Links + Account Section */}
      <div className="flex items-center justify-between m-2 flex-col md:flex-row">

        {/* Nav Links */}
        <ul className="flex gap-6 m-5 items-center justify-between flex-col md:flex-row">
          <li>
            <Link href="/" className="button">
              Home
              <svg className="w-4 h-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
              </svg>
            </Link>
          </li>

          <li>
            <Link href="/products" className="button">
              Products
              <svg className="w-4 h-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
              </svg>
            </Link>
          </li>

          <li>
            <Link href="/about" className="button">
              About
              <svg className="w-4 h-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
              </svg>
            </Link>
          </li>

          <li>
            <Link href="/contactus" className="button">
              Contact us
              <svg className="w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
              </svg>
            </Link>
          </li>
        </ul>

        {/* Account Section */}
        <div className='account'>
          {session ? (
            <>
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                onBlur={() => setTimeout(() => setShowdropdown(false), 1000)}
                className="acc"
                type="button"
              >
                Welcome {session.user.name}
                <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div className={`z-10 ${showdropdown ? "block" : "hidden"} absolute left-[15px] top-12 divide-y divide-gray-100 rounded-lg shadow w-52 bg-[#373636]`}>
                <ul className="py-2 text-sm text-white">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</Link>
                  </li>
                  <li>
                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Your Page</Link>
                  </li>
                  <li>
                    <Link onClick={() => signOut()} href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className='button'>
                Login
                <svg className="w-4 h-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>


  )
}

export default Navbar
