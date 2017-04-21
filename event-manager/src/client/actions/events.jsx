// import actionTypes from "./types";
import axios from "axios";
import actionTypes from "./types";
// import {get} from "../helpers/requests";
export function getEvents() {
    return (dispatch, getState) => {
        const state = getState();
        return axios.get('/events')
            .then((response) => {
                dispatch({
                    type: actionTypes.getEvents,
                    data: response.data
                });
            }).catch((error) => {
                /*dispatch({
                    id: 'GET',
                    type: actionTypes.addError,
                    error: error.response.data
                });*/
                console.error(error);
            });
    }
}

export function addEvent(event) {
    return (dispatch, getState) => {
        //const state = getState();
        return axios.post('/events', event)
            .then((response) => {
            if (response.data) {
                dispatch({
                    type: actionTypes.addEvent,
                    data: response.data
                });
            } else {
                throw "expected result event after insert";
            }
            }).catch((error) => {
                /*dispatch({
                 id: 'GET',
                 type: actionTypes.addError,
                 error: error.response.data
                 });*/
                console.error(error);
            });
    }
}
