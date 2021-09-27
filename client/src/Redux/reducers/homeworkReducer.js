import { CREATE_HOMEWORK, DELETE_HOMEWORK, EDIT_HOMEWORK, GET_HOMEWORK } from "../actions/types";

function homeworkReducer(homework = [], action) {
    switch (action.type) {
        case GET_HOMEWORK:
            return action.payload;
        case CREATE_HOMEWORK:
            return [...homework, action.payload]
        case DELETE_HOMEWORK:
           return homework.filter(work => work._id !== action.payload._id)
        case EDIT_HOMEWORK:
            return homework.map(work => work._id !== action.payload._id ? work : action.payload)

        default:
            return homework;
    }
}

export default homeworkReducer;