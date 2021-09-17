import { GET_COURSE } from "../actions/types";

function courseReducer(course = {}, action) {
    switch (action.type) {
        case GET_COURSE:
            return action.payload

        default:
            return course;
    }
}

export default courseReducer;