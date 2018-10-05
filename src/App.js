import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import RedditPosts from './RedditPosts'

console.log(store.getState());


console.log(store.dispatch({type:'NEW_POST',payload:{'hello':'world'}}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RedditPosts />
      </Provider>
    );
  }
}

export default App;
