import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignInForm() {
  
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/')
  }
  
  return (
    <form onSubmit={ handleSubmit } className='flex justify-center text-secondary rounded-xl px-2 py-4 '>
      <div className='px-2 min-w-72'>
        <label className='block font-semibold pl-[10%]' htmlFor="first_name">Email address</label>
        <input className='block text-primary shadow appearance-none border rounded w-3/4 px-2 py-2 mx-[10%] mb-2' placeholder='name@email.com' type="email" />
        <label className='block font-semibold pl-[10%]' htmlFor="email">Password</label>
        <input className='block text-primary shadow border rounded w-3/4 px-2 py-2 mb-4 mx-[10%]' id='password' placeholder='**********' type="password" />
        <div className='flex justify-center'>
          <button className='text-primary font-bold px-5 py-2 rounded-full border border-snow hover:text-deep hover:border-accent hover:bg-accent'>Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default SignInForm