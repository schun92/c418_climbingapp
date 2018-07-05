import axios from "axios";
import types from "./types";

export function setSearchTerm(searchTerm) {
	return {
		type: types.SET_LOCATION_SEARCH_TERM,
		payload: searchTerm
	};
}

export function setLocations(locations) {
	return {
		type: types.SET_LOCATIONS,
		payload: locations
	};
}

export function setMapCenter(lat, lng) {
	return {
		type: types.SET_MAP_CENTER,
		payload: { center: { lat, lng } }
	};
}

export function getLocations(searchTerm) {
	return async dispatch => {
		const response = await axios.get(`/api/get_location_data.php?data=${searchTerm}`);
		const { locations, mapCenterLat, mapCenterLon } = response.data.data;
		dispatch(setLocations(locations));
		dispatch(setMapCenter(mapCenterLat, mapCenterLon));
	};
}

export function setSelectedLocation(location) {
	return {
		type: types.SET_SELECTED_LOCATION,
		payload: location
	};
}

export function setRoutes(routes) {
	return {
		type: types.SET_ROUTES,
		payload: routes
	};
}

export function setSelectedRoutes(route) {
	return {
		type: types.SET_SELECTED_ROUTE,
		payload: route
	};
}
