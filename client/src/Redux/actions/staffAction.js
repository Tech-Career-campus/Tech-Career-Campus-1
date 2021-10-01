import { GET_STAFF_LIST, ADD_STAFF, DELETE_STAFF, STAFF_ERRORS, UPDATE_STAFF,UPDATE_STAFF_PASSWORD } from "./types";
import fetcher from "../../utils/fetcher";

export const getStaff = () => async dispatch => {
    await fetcher('http://localhost:8080/api/staff')
        .then((response) => dispatch({
            type: GET_STAFF_LIST,
            payload: response.data,
        }
        ))
        .catch((err) => console.log(err));
}

export const addStuff = (staff) => async dispatch => {

    try {
        await fetcher('http://localhost:8080/api/register', {
            method: 'POST',
            body: JSON.stringify({
                registeredAs: staff.registeredAs,
                firstName: staff.firstName,
                lastName: staff.lastName,
                email: staff.email,
                phone: staff.phone,
                password: staff.password,
                age: staff.age,
                jod: staff.jod,
                responsible:staff.responsible
            }),
        })
            .then((response) => {
                if (!response.data) throw response
                return response
            })
            .then((response) => dispatch({
                type: ADD_STAFF,
                payload: response.data,
            }
            ))
            .catch(error => { throw error })
    }
    catch (error) {
        dispatch({ type: STAFF_ERRORS, payload: error.errors || error })
    }

}
export const deleteStaff = (staffId) => async dispatch => {

    try {
        await fetcher('/api/staff', {
            method: 'DELETE',
            body: JSON.stringify({
                id: staffId
            }),
        })
            .then((response) => dispatch({
                type: DELETE_STAFF,
                payload: response.data,
            }
            ))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }

}

export const updateStaff = (updateStaff) => async dispatch => {
    
    const { id } = { ...updateStaff };
    await fetcher(`http://localhost:8080/api/staff/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateStaff)
    })
        .then(response => dispatch({
            type: UPDATE_STAFF,
            payload: response.data
        }))
        .catch(error => console.log(error))
}

export const updateStaffPassword = (updateStaff) => async dispatch => {
   
    // const { _id } = { ...updateStaff };
    // debugger
    await fetcher(`http://localhost:8080/api/staff/changePassword`, {
        method: 'PUT',
        body: JSON.stringify(updateStaff)
    })
    .then(response =>console.log(response))
        .then(response => dispatch({
            type: UPDATE_STAFF_PASSWORD,
            payload: response
        }))
        .catch(error => console.log(error))
}