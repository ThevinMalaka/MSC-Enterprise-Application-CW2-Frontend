import { put, call } from "redux-saga/effects";
import httpStatus from "http-status";
import { toastr } from "react-redux-toastr";

import * as loginAction from "../actions";
import { userRegister, userLogin } from "../../../api/endpoints";

export function* userRegistrationFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(userRegister, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    toastr.clean(); // clean the previous toastr
    toastr.success("Success", "User registered successfully.");
    yield put(loginAction.userRegistrationSuccess());
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  } catch (error) {
    toastr.clean(); // clean the previous toastr
    toastr.error("Error", "Something went wrong! Please try again later.");
    yield put(loginAction.userRegistrationFailed());
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  }
}

export function* userLoginFunction(payload) {
  try {
    const { info } = payload;
    const { data, status } = yield call(userLogin, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    toastr.clean(); // clean the previous toastr
    toastr.success("Success", "User logged in successfully.");
    yield put(loginAction.userLoginSuccess(data));
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  } catch (error) {
    toastr.clean(); // clean the previous toastr
    toastr.error("Error", "Something went wrong! Please try again later.");
    yield put(loginAction.userLoginFailed());
    setTimeout(() => {
      toastr.clean(); //  clean the toastr after 3 seconds
    }, 4000);
  }
}
