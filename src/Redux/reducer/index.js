import { combineReducers } from "redux";
import { TodoCheck } from "../reducer/Reducer";
export const rootReducer = combineReducers({
   TodoCheck : TodoCheck,
})
