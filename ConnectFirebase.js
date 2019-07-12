import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDvC0GrjwlWLDBZR4h6Kp9zmW1WqTXdVfk",
    authDomain: "demoapp-6402b.firebaseapp.com",
    databaseURL: "https://demoapp-6402b.firebaseio.com",
    projectId: "demoapp-6402b",
    storageBucket: "",
    messagingSenderId: "37365436082",
    appId: "1:37365436082:web:b9868042a2af04dc"
  };
  // Initialize Firebase
 export const fb = firebase.initializeApp(firebaseConfig);