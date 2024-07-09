import React from 'react'
import SignUpForm from '../../components/forms/SignUpForm'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <main className='pt-10 md:pt-40 flex justify-center'>
      <section>
        <h2 className='text-4xl text-snow font-semibold'>Create your account</h2>
        <p className='text-md pb-8 italic text-snow py-2'>Fill out the entries below to sign up...</p>
        <SignUpForm />
        <div className='flex justify-center pt-8'>
          <p className='text-snow pr-2'>Already have an account?</p>
          <Link to={ '/sign_in' } className='text-accent font-semibold hover:underline'>Sign In</Link>
        </div>
      </section>
    </main>
  )
}

export default SignUp