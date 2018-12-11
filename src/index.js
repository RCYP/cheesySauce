import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './JS/App';
import registerServiceWorker from './JS/registerServiceWorker';
import firebase from "firebase";

<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase.js"></script>
// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "cheesy-sauce.firebaseapp.com",
    databaseURL: "https://cheesy-sauce.firebaseio.com",
    projectId: "cheesy-sauce",
    storageBucket: "cheesy-sauce.appspot.com",
    messagingSenderId: "999721018944"
};
firebase.initializeApp(config);

//Signin
<script src="https://apis.google.com/js/platform.js" async defer></script>
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
