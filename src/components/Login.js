import React from 'react'
import { auth, provider, signInWithRedirect } from '../firebase'

const Login = () => {
  const signIn = () => {
    signInWithRedirect(auth, provider)
  }

  return (
    <div className="container mx-auto h-5/6 flex flex-col justify-center items-center gap-7">
      <h1 className="font-display sm:text-9xl text-6xl text-center tracking-wider heading">
        BreakOut 1.0
      </h1>
      <p className="max-w-sm md:max-w-xl sm:text-lg text-sm text-center font-mono text-terminalgreen hero">
        Synchronicity has taken place. It's your only chance to break free. But
        remember, only one can make it through. Gear up for this escape room
        event with a subtle twist.
      </p>
      <button
        onClick={signIn}
        className="text-xl font-mono font-bold px-8 py-4 border border-white border-opacity-50 signInBtn hero"
      >
        Sign In
      </button>
    </div>
  )
}
export default Login
