import { user } from "./user";
import { combineReducers } from "redux";

const rootReducer1 = combineReducers({
    userState: user
})

export default rootReducer1