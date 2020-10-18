import React from 'react'
import './App.css'

import firebase from 'firebase/app';
import 'firebase/analytics';
import "firebase/performance";

import Header from './Header.js'
import CookieConsent from "react-cookie-consent";
//import Snowfall from 'react-snowfall'

firebase.initializeApp({
  apiKey: "AIzaSyCzHU0ytUHkApWhCJt3zpO6UtZAYeCrmfs",
  authDomain: "dunkstormen-dk-ccdd6.firebaseapp.com",
  databaseURL: "https://dunkstormen-dk-ccdd6.firebaseio.com",
  projectId: "dunkstormen-dk-ccdd6",
  storageBucket: "dunkstormen-dk-ccdd6.appspot.com",
  messagingSenderId: "984778237847",
  appId: "1:984778237847:web:022671deff1afba81ec6d2",
  measurementId: "G-K6N3MG9QFE"
})

const analytics = firebase.analytics(); // eslint-disable-line no-unused-vars
const performance = firebase.performance(); // eslint-disable-line no-unused-vars

function App() {
  return (
    <div className="app">
      {/*<Snowfall />*/}
      <Header />
      <CookieConsent
        cookieName="dunkstormen-dk_cookieconsent"
      >
        This website uses cookies for analytical purposes. You agree to the use of cookies by browsing the website.
      </CookieConsent>
    </div>
  );
}

export default App;