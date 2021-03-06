import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB0-pMVLNB1h36QDd00jmpmT4bjT0-2IUw',
      authDomain: 'manager-rn-redux.firebaseapp.com',
      databaseURL: 'https://manager-rn-redux.firebaseio.com',
      projectId: 'manager-rn-redux',
      storageBucket: 'manager-rn-redux.appspot.com',
      messagingSenderId: '501128876113'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
