import fetcher from "../../utils/fetcher"
import { GET_COURSE } from "./types"

// export const getCourse = (id) => async dispatch => {
//     debugger
//     await fetcher('http://localhost:8080/api/course', {
//         method: "GET",
//         body: JSON.stringify({ id: id })
//     })
//         .then(response => dispatch({
//             type: GET_COURSE,
//             payload: response.data
//         }))
// }