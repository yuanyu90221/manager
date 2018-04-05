import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDhjtsQahPCXDrd7iNbH10to77NNweRHj4",
      authDomain: "my-manager-db.firebaseapp.com",
      databaseURL: "https://my-manager-db.firebaseio.com",
      projectId: "my-manager-db",
      storageBucket: "my-manager-db.appspot.com",
      messagingSenderId: "816685020138"
    };
    firebase.initializeApp(config);
  }
  render() {
    // second arguments is initial State
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App;