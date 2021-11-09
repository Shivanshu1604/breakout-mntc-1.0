import React from 'react'
import { Link } from 'react-router-dom'

function QuestionsOver() {
  return (
    <div className="container mx-auto px-2 py-10 h-5/6 grid place-items-center gap-1 min-h-full">
      <h1 className="font-display sm:text-6xl text-4xl  text-center tracking-wider max-w-3xl leading-relaxed">
        Bask in the glory of your victory. You have finally broken out!
      </h1>
      <Link
        to="leaderboard"
        className="text-xl font-mono px-8 py-4 border border-white border-opacity-50 hover:border-opacity-100"
      >
        Check the Leaderboards
      </Link>
    </div>
  )
}

export default QuestionsOver
