import { combineReducers } from "redux";

import locationReducer from "./location_reducer";

const rootReducer = combineReducers({
  location: locationReducer
});

export default rootReducer;