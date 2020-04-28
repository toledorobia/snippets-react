import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD9aBqjGP19ypyslybZJG2N7m_earjLhuw",
  authDomain: "snippets-dilu.firebaseapp.com",
  databaseURL: "https://snippets-dilu.firebaseio.com",
  projectId: "snippets-dilu",
  storageBucket: "snippets-dilu.appspot.com",
  messagingSenderId: "394716187140",
  appId: "1:394716187140:web:333072caaa5e16a0e60351",
  measurementId: "G-2H38SK8YNR"
});

export default app;
