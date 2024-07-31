import { combineReducers } from "redux";
import authReducer from "./authentication/authReducer";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
