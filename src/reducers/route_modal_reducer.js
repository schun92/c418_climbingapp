import types from "../actions/types";

const DEFAULT_STATE = {
    show: false
}

function routeModalReducer(state = DEFAULT_STATE, action) {
    if (action.type === types.SHOW_MODAL) {
        return { ...state, show: action.payload };
    } else {
        return state;
    }
}

export default routeModalReducer;
