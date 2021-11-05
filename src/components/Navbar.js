import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../app/userSlice'
import { X, Menu } from 'react-feather'
import { auth } from '../firebase'

function Navbar() {
  const [clicked, setClicked] = useState(false)
  const user = useSelector(selectUser)

  const countdownDate = new Date('Nov 1, 2021 18:00:00 GMT+0530').getTime()
  const now = new Date().getTime()
  const distance = countdownDate - now
  const path = window.location.pathname

  let logostyles
  if (path === '/') {
    logostyles =
      'container px-2 mx-auto flex text-lg py-1 items-center justify-center z-10'
  } else {
    logostyles =
      'container px-2 mx-auto flex text-lg py-1 items-center justify-between z-10'
  }

  return (
    <>
      <nav className={logostyles + ' desktop'}>
        {path != '/' && (
          <Link to="/">
            <h2 className="text-3xl font-display uppercase tracking-widest nav-logo">
              BreakOut
            </h2>
          </Link>
        )}

        <ul className="flex gap-8 items-center font-mono">
          {user && now > countdownDate && (
            <Link
              className="hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-md "
              to="/questions"
            >
              Questions
            </Link>
          )}

          <Link
            className="hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-md"
            to="/rules"
          >
            Rules
          </Link>

          <Link
            className="hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-md"
            to="/leaderboard"
          >
            Leaderboard
          </Link>

          {user && (
            <a
              className="hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-md"
              onClick={() => {
                auth.signOut()
              }}
            >
              SignOut
            </a>
          )}
        </ul>
      </nav>

      <nav className="h-14 container px-2 mx-auto flex justify-between text-lg py-1 items-center mobile">
        <a
          className="menu-icon hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-md"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? <X /> : <Menu />}
        </a>

        {clicked && <NavBarMobile />}
      </nav>
    </>
  )

  function NavBarMobile() {
    return (
      <ul
        className="absolute bg-black text-white bg-opacity-40 left-0 right-0 top-14 flex flex-col gap-6 text-2xl py-6 font-mono backdrop-filter backdrop-blur-md z-10 rounded-md"
        onClick={() => setClicked(!clicked)}
      >
        {user && now > countdownDate && (
          <Link className="p-3 rounded-md" to="/questions">
            Questions
          </Link>
        )}

        <Link className=" p-3 rounded-md" to="/rules">
          Rules
        </Link>

        <Link className=" p-3 rounded-md" to="/leaderboard">
          Leaderboard
        </Link>

        {user && (
          <a
            className=" p-3 rounded-md"
            onClick={() => {
              auth.signOut()
              window.location.assign('/')
            }}
          >
            SignOut
          </a>
        )}
      </ul>
    )
  }
}

export default Navbar
