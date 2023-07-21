/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeLatest } from "redux-saga/effects";

import * as types from "../actionTypes";
import { userRegistrationFunction, userLoginFunction } from "./loginSaga";

export const loginSaga = [
  takeLatest(types.USER_REGISTRATION_REQUEST, userRegistrationFunction),
  takeLatest(types.USER_LOGIN_REQUEST, userLoginFunction),
];
