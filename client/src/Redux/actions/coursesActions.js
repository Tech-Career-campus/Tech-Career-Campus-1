import fetcher from "../../utils/fetcher"
import { GET_COURSES } from "./types"

export const getCourses =()=> async dispatch =>{
    await fetcher('http://localhost:8080/api/course')
    .then(response=> dispatch({
        type: GET_COURSES,
        payload:response.data
    })).catch(error =>console.log(error))
}

