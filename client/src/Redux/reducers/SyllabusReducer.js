import { GET_SYLLABUS } from '../actions/types'

function SyllabusReducer(syllabus = {}, action) {
    switch (action.type) {
        case GET_SYLLABUS:
            return action.payload
        default:
            return syllabus;
    }
}

export default SyllabusReducer;
