import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './app/userSlice'
import db, { auth } from './firebase'
import { ref, get, set } from 'firebase/database'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Questions from './components/Questions'
import NoiseBG from './components/NoiseBG'
import Navbar from './components/Navbar'
import Leaderboard from './components/Leaderboard'
import Rules from './components/Rules'
import Countdown from './components/Countdown'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [timerDays, setTimerDays] = useState('00')

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )

        const dbref = ref(db, `/users/${authUser.uid}`)
        const now = new Date()
        let time =
          now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()

        get(dbref).then((snapshot) => {
          if (!snapshot.exists()) {
            set(dbref, {
              name: authUser.displayName,
              email: authUser.email,
              score: 0,
              timeSnapshot: time,
            })
          }
        })
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  const countdownDate = new Date('Nov 10, 2021 18:00:00 GMT+0530').getTime()
  const now = new Date().getTime()

  return (
    <>
      {now < countdownDate ? (
        <>
          <NoiseBG />
          <Countdown />
        </>
      ) : (
        <Router>
          <Navbar />
          <NoiseBG />
          {user ? (
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/questions" exact>
                <Questions />
              </Route>

              <Route path="/leaderboard" exact>
                <Leaderboard />
              </Route>

              <Route path="/rules" exact>
                <Rules />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>

              <Route path="/leaderboard" exact>
                <Leaderboard />
              </Route>

              <Route path="/rules" exact>
                <Rules />
              </Route>
            </Switch>
          )}
        </Router>
      )}
    </>
  )
}

export default App
