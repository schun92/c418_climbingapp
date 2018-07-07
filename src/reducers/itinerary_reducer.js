import types from "../actions/types";

const DEFAULT_STATE = {
	routes: []
};

function itineraryReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.ADD_ROUTE_TO_ITINERARY:
			return { ...state, routes: [...state.routes, action.payload] };
		default:
			return state;
	}
}

export default itineraryReducer;
