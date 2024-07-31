const {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  USER_LOGOUT,
} = require("./authActionType");

const initialState = {
  loading: false,
  token: "",
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };

    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: "",
        error: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...state,
        token: "",
      };

    default:
      return state;
  }
};

export default authReducer;
