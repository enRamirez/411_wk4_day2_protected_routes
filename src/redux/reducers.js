import { combineReducers } from "redux";

// reducers always have to return something
// cant be undefined
const user = (state = null) => state;
const cars= (state = []) => state;

export default combineReducers({user, cars});