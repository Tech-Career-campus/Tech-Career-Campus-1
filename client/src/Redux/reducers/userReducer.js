import { EDIT_GRADE, SET_USER} from '../actions/types'
function userReducer(state = {}, action) {
    switch (action.type) {
        // case EDIT_GRADE:
        //     return {
        //         ...state, tests: action.payload
        //     }
            case SET_USER:
                return {
                    ...state, ...action.payload
                }
        default:
            return state;
    }
}

export default userReducer;
