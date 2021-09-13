import { GET_SYLLABUS } from "./types";
import fetcher from "../../utils/fetcher";


export const getSyllabus = () => async dispatch => {

    await fetcher("http://localhost:8080/api/course")
        .then((response) => dispatch({
            type: GET_SYLLABUS,
            payload: response.data,
        }))
        .catch((err) => console.log(err));
}

