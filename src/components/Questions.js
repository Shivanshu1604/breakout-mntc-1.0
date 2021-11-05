import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../app/userSlice'
import db from '../firebase'
import { ref, update, onValue } from 'firebase/database'
import { black } from 'kleur'

const Questions = () => {
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState('')
  const [response, setResponse] = useState('')
  const user = useSelector(selectUser)
  const dbref = ref(db, `/users/${user.uid}`)

  useEffect(() => {
    onValue(dbref, (snapshot) => {
      const data = snapshot.val()
      setScore(data.score)

      onValue(ref(db, `/answers/${score + 1}`), (snapshot) => {
        if (!snapshot.val()) {
          window.location.assign('/')
        }
        setAnswer(snapshot.val())
      })
    })
  }, [score, dbref])

  const handleSubmit = () => {
    const now = new Date()
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    if (response == answer) {
      update(dbref, {
        score: score + 1,
        timeSnapshot: time,
      })
      setResponse('')
    }
  }

  return (
    <div className="container mx-auto px-2 py-10">
      <h1 className="text-4xl md:text-6xl mb-8 font-display tracking-widest">
        Questions
      </h1>
      <div className="flex items-center divide-x divide-terminalgreen text-terminalgreen">
        <div className="flex items-center gap-2 pr-3">
          <img src={user.photo} className="rounded-full w-8" />
          <h3 className="text-md md:text-lg font-mono">{user.displayName}</h3>
        </div>
        <h3 className="text-md md:text-lg font-mono font-bold pl-3">
          Score : {score}
        </h3>
      </div>

      <div className="my-16 flex flex-col gap-6 items-start mx-auto max-w-sm">
        <a className="text-xl font-mono font-bold px-8 py-4 border border-white border-opacity-50 signInBtn">
          Get Your Question
        </a>
        <input
          type="text"
          name="Response"
          placeholder="Answer Here"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="bg-transparent border-0 border-b ring-0 w-sm font-mono placeholder-white placeholder-opacity-70 focus:ring-0 focus:border-terminalgreen "
        />
      </div>
    </div>
  )
}

export default Questions

{
  /* <h1>
      Answer : {answer}
      Score : {score}
      <input
        type="text"
        name="Response"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        style={{ color: black }}
      />
      <button
        onClick={() => {
          handleSubmit()
        }}
      >
        Submit
      </button>
    </h1> */
}
