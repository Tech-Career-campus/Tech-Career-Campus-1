import { CREATE_COURSE, CREATE_COURSE_ERRORS, GET_COURSES } from "../actions/types";

function coursesReducer(state = { courses:[], errors:{} }, action) {
    debugger
    switch (action.type) {
        case GET_COURSES:
            return { errors:{}, courses : action.payload}
        case CREATE_COURSE:
            return { errors: {}, courses: [...state.courses, action.payload]}
        case CREATE_COURSE_ERRORS:
            return {...state, errors: action.payload.errors}

        default:
            return state;
    }
}

export default coursesReducer