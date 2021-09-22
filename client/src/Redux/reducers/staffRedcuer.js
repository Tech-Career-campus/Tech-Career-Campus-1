import { GET_STAFF_LIST, ADD_STAFF, DELETE_STAFF,STAFF_ERRORS, UPDATE_STAFF } from '../actions/types'

const staffRedcuer = (state = { staff: [], errors: {} }, action) => {
    switch (action.type) {
        case GET_STAFF_LIST:
            return {
                ...state, staff: action.payload
            }
        case ADD_STAFF:
            return {
                errors:{}, staff: [...state.staff ,action.payload]
            }
        case DELETE_STAFF:
            return {...state, staff: state.staff.filter(item => item._id !== action.payload._id)}
        case UPDATE_STAFF: 
            return {
                ...state, staff: state.staff.map(staff => staff._id === action.payload._id ? action.payload : staff)
            }
        case STAFF_ERRORS:
            return {...state, errors:action.payload}
        default:
            return state;
    }
}

export default staffRedcuer;