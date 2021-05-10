import { combineReducers } from "redux";

import { addDeptReducer } from "./adddeptreducer";
export const rootReducer = combineReducers({
    departments: addDeptReducer // the modified state returned by the addDeptReducer will be stored in the 'departments' state property of the store
});