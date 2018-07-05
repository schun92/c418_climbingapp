import types from "./types";

export function setLocation(location) {
  return {
    type: types.SET_LOCATION,
    payload: location
  };
}
