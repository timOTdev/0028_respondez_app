import Rebase from 're-base'
import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBlviJpFfvxeWvnGNhOO5UFiBywCE58r70",
  authDomain: "respondez-app.firebaseapp.com",
  databaseURL: "https://respondez-app.firebaseio.com",
  projectId: "respondez-app",
  storageBucket: "respondez-app.appspot.com",
  messagingSenderId: "97205646561"
})


const auth = firebase.auth()
const base = Rebase.createClass(app.database())
const githubProvider = new firebase.auth.GithubAuthProvider();

export { app, auth, base, githubProvider }
