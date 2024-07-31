import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchUserLogout,
} from "../authentication/authAction";
import { envVariables } from "../../utils/envVariables";
import axios from "axios";

export const fetchLogin = (userData) => {
  return async (dispatch, getState) => {
    dispatch(fetchLoginRequest());
    try {
      const response = await axios.post(
        `${envVariables.baseUrl}user/login`,
        userData
      );
      const token = response.data.token;
      dispatch(fetchLoginSuccess(token));
    } catch (error) {
      dispatch(fetchLoginFailure(error.message));
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserLogout());
  };
};
