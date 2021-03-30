const firebase = require('firebase')
require('firebase/auth')
require('firebase/firestore')
require('firebase/database')
require('firebase/storage')

var FIREBASE_CONFIG = require('./fbconfig.json')

if (process.env.NODE_ENV === 'development') {
  var firebaseConfig = FIREBASE_CONFIG
}

// Your web app's Firebase configuration
// if (process.env.NODE_ENV === 'development') {
//   var firebaseConfig = FIREBASE_CONFIG
// }

firebase.default.initializeApp(firebaseConfig)

// const provider = new firebase.default.auth.GoogleAuthProvider()

// const signInWithGoogle = () => {
//   firebase.default.auth.signInWithPopup(provider)
// }

// console.log(firebase)

const auth = firebase.default.auth()
const firestore = firebase.default.firestore()
const google = new firebase.default.auth.GoogleAuthProvider()
const realtimeDB = firebase.default.database()
const storage = firebase.default.storage()

module.exports = {
  firebase,
  auth,
  google,
  firestore,
  realtimeDB,
  storage
  // provider,
  // signInWithGoogle
}
