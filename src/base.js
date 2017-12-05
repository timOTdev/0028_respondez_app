import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBlviJpFfvxeWvnGNhOO5UFiBywCE58r70",
  authDomain: "respondez-app.firebaseapp.com",
  databaseURL: "https://respondez-app.firebaseio.com",
  projectId: "respondez-app",
  storageBucket: "respondez-app.appspot.com",
  messagingSenderId: "97205646561"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base }
