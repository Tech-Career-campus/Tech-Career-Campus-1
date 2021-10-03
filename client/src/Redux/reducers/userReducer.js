import { SET_USER, SET_USER_ERRORS, UPDATE_USER, START_LOADING, STOP_LOADING } from '../actions/types'
function userReducer(state = { user: {}, errors: {}, isLoading: true }, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case STOP_LOADING:
            return { ...state, isLoading: false };
        case SET_USER:
            return {
                ...state, user: action.payload
            }
        case UPDATE_USER:
            return {
                ...state, user: action.payload
            }
        case SET_USER_ERRORS:
            return {
                ...state, errors: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
