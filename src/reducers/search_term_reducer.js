import types from "../actions/types";

function searchTermReducer(state = "", action) {
  if (action.type === types.SET_LOCATION_SEARCH_TERM) {
    return action.payload;
  } else {
    return state;
  }
}

export default searchTermReducer;
