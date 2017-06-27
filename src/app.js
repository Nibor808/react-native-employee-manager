import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { firebaseConfig } from '../config.json';
import firebase from 'firebase';
import Router from './router';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}