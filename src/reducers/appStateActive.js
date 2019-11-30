import appState from "./appState";
import cookies from "react-cookies";
import axios from "axios";

export default (state = appState, action) => {
    let newState = {};
    Object.assign(newState, state);
    if (action.type === "CHANGE_DARK_MODE") {
        newState.darkMode = state.darkMode === false;
        cookies.save("darkMode", newState.darkMode, {
            expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 12 * 1000),
            path: "/"
        });
        return newState;
    } else {
        return newState;
    }
};