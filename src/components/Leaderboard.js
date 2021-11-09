import React, { useEffect, useState } from 'react'
import db, { auth } from '../firebase'
import { ref, get } from 'firebase/database'
import _ from 'lodash'

function Leaderboard() {
  const [allScores, setAllScores] = useState([])
  useEffect(() => {
    const dbref = ref(db, `/users/`)
    get(dbref).then((snapshot) => {
      const data = snapshot.val()
      setAllScores(_.orderBy(data, ['score', 'timeSnapshot'], ['desc', 'asc']))
    })
  }, [])

  return (
    <div className="container mx-auto px-2 py-10 min-h-full">
      <h1 className="text-4xl md:text-6xl font-display tracking-widest">
        LeaderBoard
      </h1>
      <ul className="my-8 flex flex-col text-lg md:text-xl font-mono divide-y divide-white divide-opacity-30">
        {allScores.map((user, index) => {
          return (
            <li className="flex flex-row justify-between py-4" key={index}>
              <span className="flex flex-row gap-1">
                <p>{index + 1}. </p>
                <p> {user.name}</p>
              </span>
              <p>{user.score}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Leaderboard
