import { EDIT_GRADE, ADD_TEST, DELETE_TEST, GET_STUDENT } from './types'

export const getStudent = (student) => dispatch =>{
    return dispatch({
        type: GET_STUDENT,
        payload: student
    })
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
        .then(res => console.log(res))
        .catch(error => console.log(error))
}

export const addTest = (newTest) => async dispatch => {
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
    
    await fetch(`http://localhost:8080/api/student/addTestById`, {
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

export const deleteTest = (testDelete) => async dispatch => {
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }

    await fetch(`http://localhost:8080/api/student/deleteTest/${testDelete.studentId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: testDelete.testId,  
        }),
        headers: defaultHeaders
    }).then(res => res.json())
        .then(res => dispatch({
            type: DELETE_TEST,
            payload: res.data
        }))
        .catch(error => console.log(error))
}