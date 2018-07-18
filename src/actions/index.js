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
		try {
			const response = await axios.get(`/api/get_location_data.php?data=${searchTerm}`);
			console.log('response', response)
			const { locations, mapCenterLat, mapCenterLon, error } = response.data.data;
			dispatch(setLocations(locations, error));
			dispatch(setMapCenter(mapCenterLat, mapCenterLon));
		} catch (err) {
			console.log('get location error: ', err)
		} 
	}
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

export function getRoutes(locationID) {
	return async dispatch => {
		const response = await axios.get(`/api/get_route_data.php?data=${locationID}`);
		const { routes } = response.data.data;
		dispatch(setRoutes(routes));
	};
}
export function setSelectedRoute(route) {
	return {
		type: types.SET_SELECTED_ROUTE,
		payload: route
	};
}

export function getSelectedRoute(routeId) {
	return async dispatch => {
		const response = await axios.get(`/api/get_route_details.php?data=${routeId}`);
		const [route] = response.data.data;
		dispatch(setSelectedRoute(route));
	};
}

export function addRouteToItinerary(route) {
	return {
		type: types.ADD_ROUTE_TO_ITINERARY,
		payload: route
	};
}

export function removeRouteFromItinerary(routeId) {
	return {
		type: types.REMOVE_ROUTE_FROM_ITINERARY,
		payload: routeId
	};
}

export function showModal(show) {
	return {
		type: types.SHOW_MODAL,
		payload: show
	};
}

export function getItenaryRoutes(...routeIds) {
	return async dispatch => {
		const routesPromises = routeIds.map(async id => {
			return axios.get(`/api/get_route_details.php?data=${id}`);
		});
		const responses = await Promise.all(routesPromises);

		try { const routes = responses.map(a => a.data.data[0]) }
		catch (err) { console.log('ERROR', err) }
		dispatch({
			type: types.REPLACE_ROUTES_IN_ITINERARY,
			payload: routes
		});
	};
}
