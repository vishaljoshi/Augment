import Immutable from 'immutable'
import * as actions from '../constants/ActionTypes';

const initialState = {
	editor: {
		pen: null,
		currentRoute: null,
		endRoutePreview: null
	},
	floorMap: {
		mapName: null,
		image: null,
		beacons: Immutable.Map(),
		routes: Immutable.Map()
	}
};

// Beacon Object {id: '', uuid: '', major: '101', minor: '1', xCord: 0, yCord: 0}
// Route Object {id: '', startx: 0, starty: 0, endx: 0, endy: 0}

export default function setIndoorMap(state = initialState, action) {
	//console.log('Indoor map reducing with action type', action.type);

	switch (action.type) {
		case actions.SET_MAP_NAME:
			return {...state, floorMap: {...state.floorMap, mapName: action.mapName}}
		case actions.SET_IMAGE:
			//console.log('Setting floor map image', action.image);
			return {...state, floorMap: {...state.floorMap, image: action.image}}

		case actions.SET_BEACON:
			var beaconsMap = state.floorMap.beacons.set(action.item.id, action.item);
			return {...state, floorMap: {...state.floorMap, beacons: beaconsMap}}
		case actions.DELETE_BEACON:
			var beaconsMap = state.beacons.delete(action.id);
			return {...state, floorMap: {...state.floorMap, beacons: beaconsMap}}

		case actions.SET_ROUTE:
			var routeElement = Object.assign({}, state.editor.currentRoute);
			//console.log('Setting route point', routeElement);

			if (routeElement.id == null) {
				routeElement.id = action.item.id;
				routeElement.startx = action.item.x;
				routeElement.starty = action.item.y;

				return {...state, editor: {...state.editor, currentRoute: routeElement}}
			} else {
				routeElement.endx = action.item.x;
				routeElement.endy = action.item.y;

				var routesMap = state.floorMap.routes.set(routeElement.id, routeElement);
				return {...state,
							editor: {...state.editor, currentRoute: null, endRoutePreview: null},
							floorMap: {...state.floorMap, routes: routesMap}}
			}

		case actions.SET_ROUTE_PREVIEW:
			if (state.editor.currentRoute != null) {
				return {...state, editor: {...state.editor, endRoutePreview: action.item}}
			} else {
				return state
			}

		case actions.CANCEL_ROUTE:
			return {...state, editor: {...state.editor, currentRoute: null, endRoutePreview: null}}

		case actions.DELETE_ROUTE:
			var routesMap = state.routes.delete(action.id);
			return {...state, floorMap: {...state.floorMap, routes: routesMap}}

		case actions.SET_PEN:
			let nextPen = state.editor.pen === action.payload? null : action.payload;
			return {...state, editor: {...state.editor, pen: nextPen}}
		case actions.SAVE_MAP:
			return {...state}

		default:
			return state;
	}
}