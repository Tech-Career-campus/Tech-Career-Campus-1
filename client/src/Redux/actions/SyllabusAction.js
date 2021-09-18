import { GET_SYLLABUS } from "./types";


export const getSyllabus = (course) => async dispatch => {

    return dispatch({
        type: GET_SYLLABUS,
        payload: course,
    })
}

