import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB6bpFP7skEsR46-mhXZek8a4kbzaXu2nk",
    authDomain: "goffee-web-test.firebaseapp.com",
    databaseURL: "https://goffee-web-test.firebaseio.com",
    projectId: "goffee-web-test",
    storageBucket: "goffee-web-test.appspot.com",
    messagingSenderId: "944797299922",
    appId: "1:944797299922:web:d938172968771b3c5d690b",
    measurementId: "G-LQF3JJF0J2"
  };

  firebase.initializeApp(config);
  export default firebase