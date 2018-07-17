import types from "../actions/types";

function mapReducer(state = {}, action) {
  if (action.type === types.SET_MAP_CENTER) {
    return action.payload;
  } else {
    return state;
  }
}

export default mapReducer;
