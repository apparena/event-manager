const defaultState = [
    {name: "test"}
];
export default function eventsReducer(state = defaultState, action = {}) {
    switch (action.type) {
        case "GET":
            return [...state, ...action.data];
        case "ADD":
            return [...state, action.data];
        default:
            return state;
    }
}