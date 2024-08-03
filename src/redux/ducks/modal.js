const SET_IS_SHOWING = 'SET_IS_SHOWING';
const SET_CURRENT_FLIGHT = 'SET_CURRENT_FLIGHT';

const initialState = {
    isShowing: false,
    flightId: 0,
};

export const modal = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_IS_SHOWING:
            return {
                ...state,
                isShowing: payload
            };
        case SET_CURRENT_FLIGHT:
            return {
                ...state,
                flightId: payload,
            };
        default:
            return state;
    }
};

export const setIsShowing = (payload) => ({
    type: SET_IS_SHOWING,
    payload,
});

export const setCurrentFlight = (payload) => ({
    type: SET_CURRENT_FLIGHT,
    payload,
})
