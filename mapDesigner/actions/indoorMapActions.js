import * as actions from '../constants/ActionTypes';

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

export function saveMap() {
	return {
		type: actions.SAVE_MAP
	}
}

export function setPen(pen) {
	return {
		type: actions.SET_PEN,
		payload: pen
	}
}