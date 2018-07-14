import types from "../actions/types";

const DEFAULT_STATE = {
	routes: []
};

function itineraryReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.ADD_ROUTE_TO_ITINERARY:
			return { ...state, routes: [...state.routes, action.payload] };
		case types.REMOVE_ROUTE_FROM_ITINERARY:
			console.log('action, and s.routes', action, state.routes)
			return { ...state, routes: state.routes.filter(route => route.id !== action.payload.id) } 
		default:
			return state;
	}
}

export default itineraryReducer;