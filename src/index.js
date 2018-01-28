import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as firebase from 'firebase';
import Routing from './config/routing';

import store from './store'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBbn_oXNa7D7oRJ36motfIfPwjKSdjmT30",
    authDomain: "redux-login-signup.firebaseapp.com",
    databaseURL: "https://redux-login-signup.firebaseio.com",
    projectId: "redux-login-signup",
    storageBucket: "redux-login-signup.appspot.com",
    messagingSenderId: "741088178995"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>,
    document.getElementById('root')
);
