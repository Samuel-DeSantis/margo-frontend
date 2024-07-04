import React from 'react'
import { PiDogFill } from "react-icons/pi";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Link to='/' className="flex items-center space-x-1 text-snow">
        <PiDogFill className='text-2xl' />
        <span className="font-semibold text-2xl">Margo</span>
      </Link>
      <Link to='/sign_in' className='text-sm border rounded py-2 px-4 border-snow'>Sign In</Link>

    </nav>
  )
}

export default Navbar