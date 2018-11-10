/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: "AIzaSyA2QdNI67IwM-ayZQnHxJYRLPa8Snq6h44",
      authDomain: "managerapp-ff591.firebaseapp.com",
      databaseURL: "https://managerapp-ff591.firebaseio.com",
      projectId: "managerapp-ff591",
      storageBucket: "managerapp-ff591.appspot.com",
      messagingSenderId: "1046473175244"
    };
    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store ={store}>
        <Router></Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
