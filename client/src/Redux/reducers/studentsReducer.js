import { CREATE_STUDENT, CREATE_STUDENT_ERRORS, DELETE_STUDENT, GET_STUDENTS, UPDATE_STUDENT } from '../actions/types'
function studentsReducer(state = { students: [], errors: {} }, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return { errors: {}, students: action.payload }
        case CREATE_STUDENT:
            return { errors: {}, students: [...state.students, action.payload] };
        case DELETE_STUDENT:
            return { errors: {}, students: state.students.filter(student => student._id !== action.payload._id) };
        case UPDATE_STUDENT:
            return { errors: {}, students: state.students.map(student => student._id === action.payload._id ? action.payload : student) };
        case CREATE_STUDENT_ERRORS:
            return { ...state, errors: action.payload }
        default:
            return state;
    }
}

export default studentsReducer;