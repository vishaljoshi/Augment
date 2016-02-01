import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import IndoorMapApp from './indoorMapApp';
import indoorMapReducers from '../reducers/indoorMapReducer';

const reducer = combineReducers({
	indoorMap: indoorMapReducers
});
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IndoorMapApp />
      </Provider>
    );
  }
}
// export default class App extends Component {
//   render() {
//	   console.log('hello');
//     return (
//       <div>hello world</div>
//     );
//   }
// }