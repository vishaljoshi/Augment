import Immutable from 'immutable'
import * as actions from '../constants/ActionTypes';

const initialState = {
	mapName: null,
	image: null,
	beacons: Immutable.Map(),
	routes: Immutable.Map(),
};

// Beacon Object {id: '', uuid: '', major: '101', minor: '1', xCord: 0, yCord: 0}
// Route Object {id: '', startx: 0, endx: 0, starty: 0, endy: 0}

export default function setIndoorMap(state = initialState, action) {
	switch (action.type) {
		case actions.SET_MAP_NAME:
			return {...state, mapName: action.mapName}
		case actions.SET_IMAGE:
			return {...state, image: action.image}

		case actions.SET_BEACON:
			var beaconsMap = state.beacons.set(action.item.id, action.item);
			return {...state, beacons: beaconsMap}
		case actions.DELETE_BEACON:
			var beaconsMap = state.beacons.delete(action.id);
			return {...state, beacons: beaconsMap}

		case actions.SET_ROUTE:
			var routesMap = state.routes.set(action.item.id, action.item);
			return {...state, routes: routesMap}
		case actions.DELETE_ROUTE:
			var routesMap = state.routes.delete(action.id);
			return {...state, routes: routesMap}

		default:
			return state;
	}
}