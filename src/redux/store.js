import {
  legacy_createStore as createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
// import authReducer from "./authentication/authReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
