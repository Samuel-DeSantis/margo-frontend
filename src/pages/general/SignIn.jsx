import React from 'react'
import SignInForm from '../../components/forms/SignInForm'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <main className='pt-40 bg-primary'>
    {/* TODO: Update styling to to be responsive, Desktop vs Mobile */}
    <section className='w-full text-center pb-4 px-4'>
      <h2 className='text-5xl text-secondary font-bold pb-2'>Welcome to Margo</h2>
      <p className='text-md italic text-secondary py-2'>Sign in below to get started</p>
    </section>
    <section className=''>
      {/* TODO: Update Sign In Form */}
      <SignInForm />
      <div className='px-40 flex justify-center'>
        <p className='text-secondary pr-2'>Don't have an account?</p>
        <Link to={ '/sign_up' } className='text-accent hover:font-semibold hover:underline'>Sign Up</Link>
      </div>
    </section>
  </main>
  )
}

export default SignIn