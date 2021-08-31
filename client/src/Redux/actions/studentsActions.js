import {EDIT_GRADE, GET_STUDENTS, ADD_TEST} from './types'
export const  getStudents =  () => async dispatch => {
    const token = localStorage.getItem("jwtToken");
     const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    await fetch("http://localhost:8080/api/student", {
        headers: defaultHeaders,
    })
        .then((response) => response.json())
        .then((response) => dispatch({
            type: GET_STUDENTS,
            payload: response.data,
        }
        ))
        .catch((err) => console.log(err));
}
export const editGrade = (updateTest) => async dispatch => {
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    await fetch(`http://localhost:8080/api/student/updateTest/${updateTest.studentId}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: updateTest.gradeId,
            name: updateTest.name,
            grade: updateTest.grade
        }),
        headers: defaultHeaders
    }).then(res => res.json())
        .then(res => dispatch({
            type: EDIT_GRADE,
            payload: res.data
        }))
        .catch(error => console.log(error))
}

export const addTest = (newTest) => async dispatch => {
    
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    await fetch(`http://localhost:8080/api/student//addTestById`, {
        method: 'POST',
        body: JSON.stringify({
            id: newTest.studentId,
            name: newTest.name,
            grade: newTest.grade
        }),
        headers: defaultHeaders
    }).then(res => res.json())
        .then(res => dispatch({
            type: ADD_TEST,
            payload: res.data
        }))
        .catch(error => console.log(error))
}