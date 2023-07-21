import jwt from "jwt-decode";
import createReducer from "../../utils/createReducer";
import * as types from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  userRegistrationSuccess: false,
  loggedUserData: {},
  token: "",
};

export const loginReducers = createReducer(initialState, {
  [types.USER_LOGIN_SUCCESS](state, action) {
    const { user, token } = action.info;
    // save token in local storage for future use
    localStorage.setItem("token", token);

    return {
      ...state,
      isLoggedIn: true,
      loggedUserData: user,
      token: token,
    };
  },
  [types.USER_REGISTRATION_REQUEST](state, action) {
    return {
      ...state,
      userRegistrationSuccess: false,
    };
  },
  [types.USER_REGISTRATION_SUCCESS](state, action) {
    return {
      ...state,
      userRegistrationSuccess: true,
    };
  },
  [types.USER_LOGOUT_REQUEST](state, action) {
    localStorage.removeItem("token");
    return {
      ...state,
      isLoggedIn: false,
      loggedUserData: {},
      token: "",
    };
  },
  [types.UPDATE_TOKEN_TO_REDUCER](state, action) {
    const token = localStorage.getItem("token");
    // decode token
    const decoded = jwt(token);
    return {
      ...state,
      token: token,
      loggedUserData: { ...state.loggedUserData, ...decoded },
    };
  },
});
