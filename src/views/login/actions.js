import * as types from "./actionTypes";

export function userRegistrationRequest(info) {
  return {
    type: types.USER_REGISTRATION_REQUEST,
    info,
  };
}

export function userRegistrationSuccess(info) {
  return {
    type: types.USER_REGISTRATION_SUCCESS,
    info,
  };
}

export function userRegistrationFailed(info) {
  return {
    type: types.USER_REGISTRATION_FAILED,
    info,
  };
}

export function userLoginRequest(info) {
  return {
    type: types.USER_LOGIN_REQUEST,
    info,
  };
}

export function userLoginSuccess(info) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    info,
  };
}

export function userLoginFailed(info) {
  return {
    type: types.USER_LOGIN_FAILED,
    info,
  };
}

export function updateTokenToReducer(info) {
  return {
    type: types.UPDATE_TOKEN_TO_REDUCER,
    info,
  };
}

export function userLogoutRequest(info) {
  return {
    type: types.USER_LOGOUT_REQUEST,
    info,
  };
}
