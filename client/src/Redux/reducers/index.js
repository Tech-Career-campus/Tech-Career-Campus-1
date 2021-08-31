import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";
import studentReducer from "./studentReducer";
import userReducer from "./userReducer";
import postsReducer from './posts'


export default combineReducers({
    user : userReducer,
    students: studentsReducer,
    student: studentReducer,
    posts: postsReducer
})