import types from "../actions/types";

function searchTermReducer(state = {}, action) {
  if (action.type === types.SET_MAP_CENTER) {
    return action.payload;
  } else {
    return state;
  }
}

export default searchTermReducer;
