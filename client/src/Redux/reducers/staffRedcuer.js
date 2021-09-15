import { GET_STAFF_LIST, ADD_STAFF, DELETE_STAFF,STAFF_ERRORS } from '../actions/types'

const staffRedcuer = (state = { staff: [], errors: {} }, action) => {
    switch (action.type) {
        case GET_STAFF_LIST:
            return {
                ...state, staff: action.payload
            }
        case ADD_STAFF:
            return {
                ...state, staff: [...state.staff ,action.payload]
            }
        case DELETE_STAFF:
            return {...state, staff: state.staff.filter(item => item._id !== action.payload._id)}
        case STAFF_ERRORS:
            return {...state, errors:action.payload}
        default:
            return state;
    }
}

export default staffRedcuer;