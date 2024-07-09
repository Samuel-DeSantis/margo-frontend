import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpForm() {

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/overview')
  }

  return (
    <form onSubmit={ handleSubmit } className='text-snow'>
      <div className='md:grid md:grid-cols-2 gap-10'>
        <div>
          <label className='block font-semibold pb-2' htmlFor="first_name">First Name</label>
          <input className='block text-deep shadow appearance-none border rounded w-full px-2 py-2 mb-6' placeholder='Enter your first name' type="text" />
        </div>
        <div>
          <label className='block font-semibold pb-2' htmlFor="first_name">Last Name</label>
          <input className='block text-deep shadow appearance-none border rounded w-full px-2 py-2 mb-6' placeholder='Enter your last name' type="text" />
        </div>
      </div>
      <label className='block font-semibold pb-2' htmlFor="first_name">Username</label>
      <input className='block text-deep shadow appearance-none border rounded w-full px-2 py-2 mb-6' placeholder='Enter your username' type="text" />
      <label className='block font-semibold pb-2' htmlFor="first_name">Email address</label>
      <input className='block text-deep shadow appearance-none border rounded w-full px-2 py-2 mb-6' placeholder='name@email.com' type="email" />
      <label className='block font-semibold pb-2' htmlFor="email">Password</label>
      <input className='block text-deep shadow border rounded w-full px-2 py-2 mb-6' id='password' placeholder='**********' type="password" />
      <button className='text-snow font-bold px-5 py-2 rounded-full border border-snow hover:text-deep hover:border-accent hover:bg-accent'>Create Account</button>
    </form>
  )
}

export default SignUpForm