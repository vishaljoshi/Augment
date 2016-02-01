import * as actions from '../constants/ActionTypes';
import {URL_SAVE_MAP} from '../constants/Configuration';

export function setFloorMapName(floorMapName) {
	return {
		type: actions.SET_MAP_NAME,
		mapName: floorMapName
	}
}

export function setFloorImage(floorImage) {
	return {
		type: actions.SET_IMAGE,
		image: floorImage
	}
}

export function setBeacon(beaconId, x, y, name, uuid, majorVer, minorVer) {
	return {
		type: actions.SET_BEACON,
		item: {id: beaconId, name: name, uuid: uuid, major: majorVer, minor: minorVer, xCord: x, yCord: y}
	}
}

export function updateBeacon(beacon) {
	return {
		type: actions.SET_BEACON,
		item: beacon
	}
}

export function deleteBeacon(beaconId) {
	return {
		type: actions.DELETE_BEACON,
		id: beaconId
	}
}

export function setRoute(routeId, x, y) {
	return {
		type: actions.SET_ROUTE,
		item: {id: routeId, x: x, y: y}
	}
}

export function updateRoute(route) {
	return {
		type: actions.UPDATE_ROUTE,
		item: route
	}
}

export function setEndRoutePreview(x, y) {
	return {
		type: actions.SET_ROUTE_PREVIEW,
		item: {x: x, y: y}
	}
}

export function cancelRoute() {
	return {
		type: actions.CANCEL_ROUTE
	}
}

export function deleteRoute(routeId) {
	return {
		type: actions.DELETE_ROUTE,
		id: routeId
	}
}

export function setPen(pen) {
	return {
		type: actions.SET_PEN,
		payload: pen
	}
}

export function mapSaved(err) {
	return {
		type: actions.SAVE_COMPLETED,
		error: err
	}
}

export function clearSaveStatus() {
	return {
		type: actions.CLEAR_SAVE_STATUS
	}
}

export function newMap() {
	return {
		type: actions.NEW_MAP
	}
}


export function cancelNewMap() {
	return {
		type: actions.CANCEL_NEW_MAP
	}
}

export function openMap() {
	return {
		type: actions.OPEN_MAP
	}
}

export function cancelOpenMap() {
	return {
		type: actions.CANCEL_OPEN_MAP
	}
}

export function saveMap(floorMap) {
	return function(dispatch) {
		console.log('In save map', dispatch, JSON.stringify({
			mapName: floorMap.mapName,
			beacons: floorMap.beacons.toArray(),
			routes: floorMap.routes.toArray(),
			image: floorMap.image
		  }));

		fetch(URL_SAVE_MAP, {
		  method: 'POST',
		  headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			mapName: floorMap.mapName,
			beacons: floorMap.beacons,
			routes: floorMap.routes,
			image: floorMap.image
		  })
		})
		.then(checkStatus)
		.then(response => response.json())
		.then(json => {
			console.log('Saved map response', json);
			dispatch(mapSaved());
		})
		.catch(error => {
			console.log('Save map failed', error)
			dispatch(mapSaved(error));
		})

	}
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
