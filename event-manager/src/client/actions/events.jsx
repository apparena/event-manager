//todo ajax call action -> result to reducer -> store
// import actionTypes from "./types";
import axios from "axios";
// import {get} from "../helpers/requests";
export function getEvents() {
    return (dispatch, getState) => {
        const state = getState();
        return axios.get('/events')
            .then((response) => {
                dispatch({
                    type: 'GET',
                    data: response.data //TODO server result
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
    return {
        type: "ADD",
        data: event
    }

}