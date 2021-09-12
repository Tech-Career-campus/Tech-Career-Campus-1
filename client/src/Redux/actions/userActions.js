import { SET_USER, SET_USER_ERRORS } from './types';
import jwt_decode from "jwt-decode";

export const getUser = (loginInfo) => async dispatch => {
    try {
        if (!localStorage.jwtToken) {
            await fetch("/api/login", {
                method: 'POST',
                body: JSON.stringify({
                    role: loginInfo.role,
                    email: loginInfo.email,
                    password: loginInfo.password,
                }), headers: { "Content-Type": "application/json" }

            })
                .then(response => response.json())
                .then((response) => {
                    if (!response.result) throw response
                    return response
                })
                .then((res) => localStorage.setItem("jwtToken", res.result))
                .catch(err => { throw err })
        }
        const token = localStorage.getItem("jwtToken")
        const decoded = jwt_decode(token);
        return dispatch({
            type: SET_USER,
            payload: decoded
        })
    }
    catch (error) {
        dispatch({
            type: SET_USER_ERRORS,
            payload: error.errors
        })
    }
}