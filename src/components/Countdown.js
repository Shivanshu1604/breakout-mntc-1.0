import React, { useState, useRef, useEffect } from 'react'

function Countdown() {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMins, setTimerMins] = useState('00')
  const [timerSecs, setTimerSecs] = useState('00')

  let interval = useRef()
  const startTimer = () => {
    const countdownDate = new Date('Nov 10, 2021 19:00:00 GMT+0530').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let secs = Math.floor((distance % (1000 * 60)) / 1000)

      days = days < 10 ? '0' + days : days
      hours = hours < 10 ? '0' + hours : hours
      mins = mins < 10 ? '0' + mins : mins
      secs = secs < 10 ? '0' + secs : secs

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerHours(hours)
        setTimerDays(days)
        setTimerMins(mins)
        setTimerSecs(secs)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <>
      <div className="container mx-auto px-2 py-10 h-full flex flex-col items-center justify-center">
        <h1 className="font-display sm:text-9xl text-6xl text-center tracking-wider heading">
          BreakOut 1.0
        </h1>

        <h3 className="font-mono mt-10 text-lg hero">Coming Soon</h3>

        <div className="flex gap-2 mt-4">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-6xl lg:text-8xl text-terminalgreen hero">
              {timerHours}
            </h2>
            <p className="text-center font-mono text-xl text-terminalgreen font-bold hero">
              hours
            </p>
          </div>
          <h2 className="font-mono text-6xl lg:text-8xl text-terminalgreen hero">
            :
          </h2>
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-6xl lg:text-8xl text-terminalgreen hero">
              {timerMins}
            </h2>
            <p className="text-center font-mono text-xl text-terminalgreen font-bold hero">
              mins
            </p>
          </div>
          <h2 className="font-mono text-6xl lg:text-8xl text-terminalgreen hero">
            :
          </h2>
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-6xl lg:text-8xl text-terminalgreen hero">
              {timerSecs}
            </h2>
            <p className="text-center font-mono text-xl text-terminalgreen font-bold hero">
              secs
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 text-center w-screen font-mono text-md">
        Maths N Tech Club | NIT Durgapur
      </div>
    </>
  )
}

export default Countdown
