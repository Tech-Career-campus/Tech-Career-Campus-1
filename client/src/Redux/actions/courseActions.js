import fetcher from "../../utils/fetcher"
import { GET_COURSE ,DELETE_COURSE} from "./types"

export const getCourse = (id) => async dispatch => {
    await fetcher(`http://localhost:8080/api/course/getCourseById/${id}`)
        .then(response => dispatch({
            type: GET_COURSE,
            payload: response.data
        }))
}
export const deleteCourse = (id) => async dispatch => {
    await fetcher(`http://localhost:8080/api/course/deleteCourseById/${id}`,{
        method: 'DELETE',
    })
        .then(response => dispatch({
            type: DELETE_COURSE,
            payload: response.data
        }))
}