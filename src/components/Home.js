import React from 'react'
import { Link } from 'react-router-dom'
const HomeOpen = () => {
  return (
    <>
      <div className="container mx-auto h-5/6 flex flex-col justify-center items-center gap-8 px-2">
        <h1 className="font-display sm:text-9xl text-6xl  text-center tracking-wider heading">
          BreakOut 1.0
        </h1>
        <p className="max-w-sm md:max-w-xl sm:text-lg  text-sm text-center font-mono text-terminalgreen">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/questions">
          <button className="text-xl font-mono font-bold px-8 py-4 border border-white border-opacity-50 signInBtn">
            Start The Questions
          </button>
        </Link>
      </div>
    </>
  )
}

const Home = () => {
  return (
    <>
      <HomeOpen />
    </>
  )
}

export default Home
