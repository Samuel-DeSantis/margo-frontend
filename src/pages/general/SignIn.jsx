import React, { useContext, useState } from 'react'
import SignInForm from '../../components/forms/SignInForm'
import { Link } from 'react-router-dom'
import UserContext from '../../components/context/UserContext'

function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className='pt-40'>
    {/* TODO: Update styling to to be responsive, Desktop vs Mobile */}
    <section className='w-full text-center pb-4 px-4'>
      <h2 className='text-5xl text-snow font-bold pb-2'>Welcome to Margo</h2>
      <p className='text-md italic text-snow py-2'>Sign in below to get started</p>
    </section>
    <section className=''>
      {/* TODO: Update Sign In Form */}
      <SignInForm />
      <div className='flex justify-center pt-4'>
        <p className='text-snow pr-2'>Don't have an account?</p>
        <Link to={ '/sign_up' } className='text-accent font-semibold hover:underline'>Sign Up</Link>
      </div>
    </section>
  </main>
  )
}

export default SignIn