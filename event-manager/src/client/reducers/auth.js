import actionTypes from "../actions/types";
import jwtDecode from "jwt-decode";

const initialState = {
    status: null,
    token: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    authType: "user"
};

export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.loginUser:
            const jwt = action.data.data;
            const jwtData = jwtDecode(jwt);
            localStorage.setItem("aa_auth_token", jwt);
            return Object.assign({}, state, {
                isAuthenticating: false,
                isAuthenticated: true,
                token: jwt,
                statusText: 'You have been successfully logged in.'
            }, jwtData);
        case actionTypes.unauthorizedUser:
            return Object.assign({}, state, action.error.response.data);
        case actionTypes.checkAuthentication:
            if (action.token && (Date.now() / 1000) <= jwtDecode(action.token).exp) {
                const jwt = action.token;
                const jwtData = jwtDecode(jwt);
                localStorage.setItem("aa_auth_token", jwt);
                window.allowedResources = Object.values(jwtData.allowedResources);
                return Object.assign({}, state, {
                    status: 200,
                    isAuthenticating: false,
                    isAuthenticated: true,
                    token: action.token,
                    statusText: 'You have been successfully logged in.'
                }, jwtData);
            } else {
                window.allowedResources = undefined;
                localStorage.removeItem("aa_auth_token");
                return state;
            }
        case actionTypes.logoutUser:
            localStorage.removeItem("aa_auth_token");
            window.allowedResources = undefined;
            return Object.assign({}, initialState, {
                statusText: 'You have been successfully logged out.'
            });
        case actionTypes.registerCompany:
            if (action.payload.status === 201) {
                return Object.assign({}, state, {
                    status: action.payload.status,
                    authType: "company"
                }, action.payload.data.data)
            } else {
                return Object.assign({}, state, {
                    status: action.payload.data.status,
                    statusText: action.payload.data.message,
                    authType: "company"
                })
            }
        case actionTypes.registerUser:
            if (action.payload.status === 201) {
                return Object.assign({}, state, {
                    status: action.payload.status,
                    authType: "user"
                }, action.payload.data.data)
            } else {
                return Object.assign({}, state, {
                    status: action.payload.data.status,
                    statusText: action.payload.data.message,
                    authType: "user"
                })
            }
        default:
            return state;
    }
}
