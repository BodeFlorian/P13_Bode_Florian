import React from 'react'
import './SignIn.css'
import SignInForm from '../../components/SignInForm/SignInForm'

const SignIn = () => {
  return (
    <main className="main sign-in">
      <div className="bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <SignInForm />
        </section>
      </div>
    </main>
  )
}

export default SignIn
