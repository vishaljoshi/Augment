// Test backend
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-fetch'
import Immutable from 'immutable'

function createMap(mapState) {
	console.log('creating map');
  return dispatch => {
    return fetch("http://www.google.com.sg")
      .then(response => response.json())
      .then(json => console.log(json))
  }
}

var mapReducer = function (state = {}, action) {
    console.log('mapReducer was called with state', state, 'and action', action)

    switch (action.type) {
        case 'SET_IMAGE':
            return {
                ...state,
                image: action.image
		}
        default:
            return state;
    }
}

var reducer = combineReducers({
    map: mapReducer
})

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
var store_0 = createStoreWithMiddleware(reducer)

console.log("\n", '### It starts here')
console.log('store_0 state after initialization:', store_0.getState())

store_0.dispatch({
    type: 'AN_ACTION'
})

console.log('store_0 state after action AN_ACTION:', store_0.getState())

var setImageActionCreator = function (img) {
	return createMap();

    //return {
    //    type: 'SET_IMAGE',
    //    image: img
    //}
}

store_0.dispatch(setImageActionCreator('data:application/png;base64,JVBERi0xLjQKJ'))

console.log('store_0 state after action SET_NAME:', store_0.getState())

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}


/*console.log(JSON.stringify({
    mapName: 'Unit Test Indoor Map 1',
    beacons: [{id: '1', uuid: 'test-uuid', major: '101', minor: '1', xCord: 5, yCord: 10}],
    routes: [{id: '1', startx: 25, endx: 400, starty: 313, endy: 719}],
	image: 'data:application/png;base64,JVBERi0x'
  }));
*/

//fetch("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=123&q=Jack&page_limit=1", {
fetch("http://172.16.158.92:9000/addMap", {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    mapName: 'Unit Test Indoor Map #' + new Date(),
    beacons: [{id: null, uuid: 'test-uuid', major: '101', minor: '1', xCord: 5, yCord: 10}],
    routes: [{id: null, startx: 25, endx: 400, starty: 313, endy: 719}],
	image: 'data:application/png;base64,JVBERi0x'
  })
})
.then(checkStatus)
.then(response => response.json())
.then(json => {
	console.log('Saved response', json);

	fetch("http://172.16.158.92:9000/map/" + json.id)
	.then(response => response.json())
	.then(json => console.log('Retrieved record', json))
	.catch(error => console.log('read request failed', error));
})
.catch(error => console.log('request failed', error))





