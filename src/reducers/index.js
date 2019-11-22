import {combineReducers} from "redux";
import appState from "./appState";
import appStateActive from "./appStateActive";

const allReducers = combineReducers({
	appState: appState,
	appStateActive: appStateActive
});

export default allReducers;