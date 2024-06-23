import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAvFAyLxar0Yn8YmgcxSCD1ONojxGrTKUs',
  authDomain: 'music-5a572.firebaseapp.com',
  projectId: 'music-5a572',
  storageBucket: 'music-5a572.appspot.com',
  messagingSenderId: '273255014761',
  appId: '1:273255014761:web:f40e39f1a0b02c33e7ddf8'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const userCollection = db.collection('user')
const songsCollection = db.collection('songs')

export { auth, db, songsCollection, storage, userCollection }
