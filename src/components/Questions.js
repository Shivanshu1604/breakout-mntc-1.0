import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../app/userSlice'
import db from '../firebase'
import { ref, update, onValue } from 'firebase/database'

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
  }, [score])

  const handleSubmit = () => {
    const now = new Date()
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    if (response == answer) {
      update(dbref, {
        score: score + 1,
        timeSnapshot: time,
      })
    }
  }

  return (
    <h1>
      Answer : {answer}
      Score : {score}
      <input
        type="text"
        name="Response"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <button
        onClick={() => {
          handleSubmit()
        }}
      >
        Submit
      </button>
    </h1>
  )
}

export default Questions
