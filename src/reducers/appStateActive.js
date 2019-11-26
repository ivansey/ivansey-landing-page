import appState from "./appState";
import cookies from "react-cookies";

export default (state = appState, action) => {
    if (action.type === "CHANGE_DARK_MODE") {
        let newState = {};
        newState.darkMode = state.darkMode === false;
        cookies.save("darkMode", newState.darkMode, {expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 12 * 1000), path: "/"});
        return newState;
    } else if (action.type === "GET_APP_STATE") {
        return state
    } else {
        return state
    }
}