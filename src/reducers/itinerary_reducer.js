import types from '../actions/types';

const DEFAULT_STATE = {
    routes: [{
        description:
            "Go straight up the right side of the face just left of Anabel moving left to join Crystal Clear near the top.",
        difficulty:
            "V3",
        image:
            "https://cdn-files.apstatic.com/climb/106769054_medium_1494139232.jpg",
        location:
            "Corona Del Mar",
        name:
            "Italian Fall",
        pitches:
            "0",
        star_votes:
            "27",
        stars:
            "3.5",
        type:
            "Trad, Boul"
    }]
}


function itineraryReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.ADD_ROUTE_TO_ITINERARY:
            return { ...state, routes: [...state.routes, action.payload] }
        default:
            return state
    }
}

export default itineraryReducer;