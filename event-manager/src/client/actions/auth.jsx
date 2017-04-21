import actionTypes from "./types";
import {loginUser, registerUser, createCompanyAction} from "../helpers/requests";

export function checkAuthentication(token) {
    return {
        type: actionTypes.checkAuthentication,
        token
    }
}

export function login(email, password) {
    return (dispatch, getState) => {
        return loginUser(email, password)
            .then((data) => {
                dispatch({
                    type: actionTypes.loginUser,
                    data
                })
            }).catch((error) => {
                dispatch({
                    type: actionTypes.unauthorizedUser,
                    error
                })
            })
    }
}

export function register(username, email, password, companyId, firstname, lastname) {
    const request = registerUser(username, email, password, companyId, firstname, lastname);
    return {
        type: actionTypes.registerUser,
        data: request.data
    }
}

export function createCompany(companyName) {
    const request = createCompanyAction(companyName);
    return {
        type: actionTypes.registerCompany,
        payload: request
    }
}

export function logout() {
    return {
        type: actionTypes.logoutUser
    }
}
