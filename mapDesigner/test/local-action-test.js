// Test Actions
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import * as mapActions from '../actions/indoorMapActions'
import mapReducer from '../reducers/indoorMapReducer'

console.log(mapActions);
console.log(mapReducer);

var reducer = combineReducers({
    map: mapReducer
})

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
var store_0 = createStoreWithMiddleware(reducer)

console.log("\n", '### It starts here')
console.log('store_0 state after initialization:', store_0.getState())

function dispatchAndLog(store, createAction, description) {
	store.dispatch(createAction)
	console.log('store state after action:', description, store.getState())
}

dispatchAndLog(store_0, mapActions.setFloorMapName('1st map'), 'setFloorMapName');
dispatchAndLog(store_0, mapActions.setFloorImage('data:application/png;base64,JVBERi0x'), 'setFloorImage');
dispatchAndLog(store_0, mapActions.addBeacon({id: 1, uuid: 'test-uuid', major: '101', minor: '1', xCord: 5, yCord: 10}), 'addBeacon 1');
dispatchAndLog(store_0, mapActions.addBeacon({id: 2, uuid: 'test-uuid', major: '101', minor: '1', xCord: 5, yCord: 10}), 'addBeacon 2');
dispatchAndLog(store_0, mapActions.updateBeacon({id: 1, uuid: 'test-uuid-2', major: '101', minor: '1', xCord: 5, yCord: 10}), 'updateBeacon 1');
dispatchAndLog(store_0, mapActions.deleteBeacon(2), 'deleteBeacon 2');
dispatchAndLog(store_0, mapActions.addRoute({id: 1, startx: 25, endx: 400, starty: 313, endy: 719}), 'addRoute 1');
dispatchAndLog(store_0, mapActions.addRoute({id: 2, startx: 25, endx: 400, starty: 313, endy: 719}), 'addRoute 2');
dispatchAndLog(store_0, mapActions.updateRoute({id: 2, startx: 5, endx: 40, starty: 31, endy: 19}), 'updateRoute 2');
dispatchAndLog(store_0, mapActions.deleteRoute(1), 'deleteRoute 1');
