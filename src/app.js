import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAG-ZmMQTNbi-O0Jx2smAvbpBYSrPMyPms',
      authDomain: 'manager-c2f91.firebaseapp.com',
      databaseURL: 'https://manager-c2f91.firebaseio.com',
      projectId: 'manager-c2f91',
      storageBucket: 'manager-c2f91.appspot.com',
      messagingSenderId: '748735562206'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;