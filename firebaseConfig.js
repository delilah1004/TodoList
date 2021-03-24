import * as firebase from 'firebase/app';

import "firebase/database";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhq3Qw9iZ4feIOos5SkYR7ZcIsXNQW6A0",
  authDomain: "to-do-list-fff50.firebaseapp.com",
  databaseURL: "https://to-do-list-fff50-default-rtdb.firebaseio.com/",
  projectId: "to-do-list-fff50",
  storageBucket: "to-do-list-fff50.appspot.com",
  messagingSenderId: "731444374124",
  appId: "1:731444374124:web:59e2e0dfca88fcbee40649",
  measurementId: "G-Z6405KFH33"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()