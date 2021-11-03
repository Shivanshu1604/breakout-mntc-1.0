import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBSRZSQ5Lr9yYu6Yl45NWC6mszVd6Ahqbg',
  authDomain: 'escape-room-mntc.firebaseapp.com',
  databaseURL:
    'https://escape-room-mntc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'escape-room-mntc',
  storageBucket: 'escape-room-mntc.appspot.com',
  messagingSenderId: '130662997243',
  appId: '1:130662997243:web:49fba4acea5e0f2e07245e',
  measurementId: 'G-QSV4SB0MHG',
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { auth, provider, signInWithRedirect }
export default db
