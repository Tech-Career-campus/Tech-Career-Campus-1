import { GET_COURSE ,DELETE_COURSE} from "../actions/types";

function courseReducer(course = {}, action) {
    switch (action.type) {
        case GET_COURSE:
            return action.payload
        case DELETE_COURSE:
            return course
        default:
            return course;
    }
}

export default courseReducer;