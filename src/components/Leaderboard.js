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
      _.sortBy(data, ['score', 'timeSnapshot'])
      console.log(data)
    })
  }, [allScores])
  return <div>HEllo</div>
}

export default Leaderboard
