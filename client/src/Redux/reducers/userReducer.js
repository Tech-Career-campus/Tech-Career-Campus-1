import {  SET_USER, SET_USER_ERRORS, UPDATE_USER} from '../actions/types'
function userReducer(state = {user:{}, errors:{}}, action) {
    switch (action.type) {
        case SET_USER:
                return {
                    ...state, user:action.payload
                }
        case UPDATE_USER:
                return {
                    ...state, user:action.payload
                }
            case SET_USER_ERRORS:
                return {
                    ...state, errors:action.payload
                }
        default:
            return state;
    }
}

export default userReducer;
