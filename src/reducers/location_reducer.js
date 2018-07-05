import types from "../actions/types";

function locationReducer(state = "", action) {
  if (action.type === types.SET_LOCATION) {
    return action.payload;
  } else {
    return state;
  }
}

export default locationReducer;
