const defaultState = {
    // 0: {name: "added on defaultState (reducer\\events)"}
};
export default function eventsReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case "GET":
            // replace all events with current query-result
            return action.data;
        case "ADD":
            // add new event to local state
            return {...state, ...action.data};
        default:
            return state;
    }
}