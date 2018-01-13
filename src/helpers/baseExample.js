import Rebase from 're-base'
import firebase from 'firebase/app'

const app = firebase.initializeApp({
  apiKey: "yourAPIKey",
  authDomain: "youAuthDomain",
  databaseURL: "yourDatabaseURL",
  projectId: "yourProjectId",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "youMessagingSenderId"
})


const auth = firebase.auth()
const base = Rebase.createClass(app.database())
const githubProvider = new firebase.auth.GithubAuthProvider();

export { app, auth, base, githubProvider }
