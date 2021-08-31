import { SET_USER } from './types';
import jwt_decode from "jwt-decode";

export const getUser = (loginInfo) => async dispatch => {
    const token = localStorage.getItem("jwtToken");
    const defaultHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    try {
        await fetch("http://localhost:8080/api/login", {
            method: 'POST',
            body: JSON.stringify({
                role: loginInfo.role,
                email: loginInfo.email,
                password: loginInfo.password,
            }),
            headers: defaultHeaders
        })

            .then((res) => {
                if (!res.ok) throw res.json()
               return res.json()
            })
            .then((res) => localStorage.setItem("jwtToken", res.result))
            .catch(error=> {throw error})
        if (localStorage.jwtToken) {
            const token = localStorage.getItem("jwtToken")
            const decoded = jwt_decode(token);
            return dispatch({
                type: SET_USER,
                payload: { ...decoded, isConnected: true }
            })

        }
    }
    catch (error) {
console.log(error)   
     error.then(error => dispatch({
            type: SET_USER,
            payload: { isConnected: false, ...error }
        })
        )
    }
}