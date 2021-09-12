import fetcher from "../../utils/fetcher"
import { GET_COURSES } from "./types"

export const getCourses =()=> dispatch =>{
    fetcher('/api/course')
    .then(response=> dispatch({
        type: GET_COURSES,
        payload:response.data
    }))
}

export const getCourse = () => dispatch => {
    fetcher('/api/course')
        .then(response => dispatch({
            type: GET_COURSES,
            payload: response.data
        }))
}
