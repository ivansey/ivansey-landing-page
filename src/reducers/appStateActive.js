import appState from "./appState";

export default (state = appState, action) => {
    if (action.type === "CHANGE_DARK_MODE") {
        let newState = {}; newState.darkMode = state.darkMode === false;
        return newState;
    } else if (action.type === "GET_APP_STATE") {
        return state
    } else {
        return state
    }
}