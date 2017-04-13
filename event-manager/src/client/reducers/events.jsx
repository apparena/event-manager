
export default events = (store, action) => {
    switch (action.type) {
        case "GET":
            return {
                checked: !store.checked
            };
        default:
            return store;
    }
};