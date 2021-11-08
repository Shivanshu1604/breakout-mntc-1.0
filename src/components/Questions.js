import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../app/userSlice'
import db from '../firebase'
import { ref, update, onValue } from 'firebase/database'

const Questions = () => {
  const [score, setScore] = useState(0)
  const [answerE, setAnswerE] = useState('')
  const [answerM, setAnswerM] = useState('')
  const [answerT, setAnswerT] = useState('')
  const [answer, setAnswer] = useState('')
  const [response, setResponse] = useState('')
  const [question, setQuestion] = useState(1)

  const user = useSelector(selectUser)
  const dbref = ref(db, `/users/${user.uid}`)

  useEffect(() => {
    onValue(dbref, (snapshot) => {
      const userdata = snapshot.val()
      setScore(userdata.score)
      setQuestion(userdata.questionNo)

      onValue(ref(db, `/answers/${question}`), (snapshot) => {
        if (!snapshot.val()) {
          window.location.assign('/over')
        }
        setAnswerE(snapshot.val().E)
        setAnswerM(snapshot.val().M)
        setAnswerT(snapshot.val().H)
      })
    })
  }, [score, dbref])

  const handleSubmit = () => {
    document.querySelector('.question-wrong').hidden = true
    const now = new Date()
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()

    if (response.toLowerCase() == answerE) {
      update(dbref, {
        score: score + 1,
        questionNo: question + 1,
        timeSnapshot: time,
      })
      setResponse('')
    } else if (response.toLowerCase() == answerM) {
      update(dbref, {
        score: score + 2,
        questionNo: question + 1,
        timeSnapshot: time,
      })
      setResponse('')
    } else if (response.toLowerCase() == answerT) {
      update(dbref, {
        score: score + 3,
        questionNo: question + 1,
        timeSnapshot: time,
      })
      setResponse('')
    } else {
      document.querySelector('.question-wrong').hidden = false
    }
  }

  return (
    <div className="container mx-auto px-2 py-10">
      <h1 className="text-4xl md:text-6xl mb-8 font-display tracking-widest">
        Room #{question}
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
        <a
          className="text-lg font-mono px-6 py-3 border border-white border-opacity-50"
          href={`/Questions/question${question}.pdf`}
        >
          Get Your Question as PDF
        </a>
        <input
          type="text"
          name="Response"
          placeholder="Answer Here"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="bg-transparent border-0 border-b ring-0 w-sm font-mono placeholder-white placeholder-opacity-70 hover:border-white focus:ring-0 focus:border-terminalgreen "
        />
        <button
          className="text-lg font-mono px-7 py-3 bg-white bg-opacity-50 text-black hover:bg-opacity-100"
          onClick={() => {
            handleSubmit()
          }}
        >
          Submit
        </button>
        <p className="question-wrong text-red font-mono" hidden>
          Sorry, Your Answer is wrong. Try Again!
        </p>
      </div>
    </div>
  )
}

function AddScore(score) {
  return <div className="absolute inset-0"></div>
}

export default Questions
