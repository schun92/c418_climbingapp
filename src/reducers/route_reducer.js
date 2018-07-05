import types from "../actions/types";

const DEFAULT_STATE = {
  routes: [],
  selectedRoute: null
};

function routeReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.SET_ROUTES:
      return { ...state, routes: action.payload };
    case types.SET_SELECTED_ROUTE:
      return { ...state, selectedRoute: action.payload };
    default:
      return state;
  }
}

export default routeReducer;
