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

export function addBeacon(beacon) {
	return {
		type: actions.SET_BEACON,
		item: beacon
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

export function addRoute(route) {
	return {
		type: actions.SET_ROUTE,
		item: route
	}
}

export function updateRoute(route) {
	return {
		type: actions.SET_ROUTE,
		item: route
	}
}

export function deleteRoute(routeId) {
	return {
		type: actions.DELETE_ROUTE,
		id: routeId
	}
}

export function save() {
	return {
		type: actions.SAVE
	}
}