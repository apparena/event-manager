import actionTypes from "../actions/types";

const defaultState = {
  loaded: false,
  events: []
};
export default function eventsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case actionTypes.getEvents:
      // replace all events with current query-result
      return {
        loaded: true,
        events: action.data
      };
    case actionTypes.addEvent:
      // add new event to local state
      return {
        ...state,
        events: [...state.events, action.data]
      };
    default:
      return state;
  }
}
