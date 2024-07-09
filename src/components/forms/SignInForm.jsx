import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignInForm() {
  
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/dashboard')
  }
  
  return (
    <form onSubmit={ handleSubmit } className='flex justify-center text-snow rounded-xl px-2 py-4'>
      <div className='px-2'>
        <label className='block font-semibold' htmlFor="first_name">Email address</label>
        <input className='block text-deep shadow appearance-none border rounded px-2 py-2 mb-2' placeholder='name@email.com' type="email" />
        <label className='block font-semibold' htmlFor="email">Password</label>
        <input className='block text-deep shadow border rounded px-2 py-2 mb-4' id='password' placeholder='**********' type="password" />
        <div className=''>
          <button className='text-snow font-bold px-5 py-2 rounded-full border border-snow hover:text-deep hover:border-accent hover:bg-accent'>Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default SignInForm