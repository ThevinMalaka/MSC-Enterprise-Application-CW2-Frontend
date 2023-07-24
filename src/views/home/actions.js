import * as types from "./actionTypes";

// ---------------------------------------------

export function workoutPlanEnrollRequest(info) {
  return {
    type: types.WORKOUT_PLAN_ENROLL_REQUEST,
    info,
  };
}

export function workoutPlanEnrollSuccess(info) {
  return {
    type: types.WORKOUT_PLAN_ENROLL_SUCCESS,
    info,
  };
}

export function workoutPlanEnrollFailed(info) {
  return {
    type: types.WORKOUT_PLAN_ENROLL_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getWorkoutPlanListRequest(info) {
  return {
    type: types.GET_WORKOUT_PLAN_LIST_REQUEST,
    info,
  };
}

export function getWorkoutPlanListSuccess(info) {
  return {
    type: types.GET_WORKOUT_PLAN_LIST_SUCCESS,
    info,
  };
}

export function getWorkoutPlanListFailed(info) {
  return {
    type: types.GET_WORKOUT_PLAN_LIST_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getWorkoutPlanDetailsRequest(info) {
  return {
    type: types.GET_WORKOUT_PLAN_DETAILS_REQUEST,
    info,
  };
}

export function getWorkoutPlanDetailsSuccess(info) {
  return {
    type: types.GET_WORKOUT_PLAN_DETAILS_SUCCESS,
    info,
  };
}

export function getWorkoutPlanDetailsFailed(info) {
  return {
    type: types.GET_WORKOUT_PLAN_DETAILS_FAILED,
    info,
  };
}

// ---------------------------------------------

export function submitCompletedWorkoutRequest(info) {
  return {
    type: types.SUBMIT_COMPLETED_WORKOUT_REQUEST,
    info,
  };
}

export function submitCompletedWorkoutSuccess(info) {
  return {
    type: types.SUBMIT_COMPLETED_WORKOUT_SUCCESS,
    info,
  };
}

export function submitCompletedWorkoutFailed(info) {
  return {
    type: types.SUBMIT_COMPLETED_WORKOUT_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getUserEnrolledWorkoutPlanRequest(info) {
  return {
    type: types.GET_USER_ENROLLED_WORKOUT_PLAN_REQUEST,
    info,
  };
}

export function getUserEnrolledWorkoutPlanSuccess(info) {
  return {
    type: types.GET_USER_ENROLLED_WORKOUT_PLAN_SUCCESS,
    info,
  };
}

export function getUserEnrolledWorkoutPlanFailed(info) {
  return {
    type: types.GET_USER_ENROLLED_WORKOUT_PLAN_FAILED,
    info,
  };
}

// ---------------------------------------------

export function addWeightRequest(info) {
  return {
    type: types.ADD_WEIGHT_REQUEST,
    info,
  };
}

export function addWeightSuccess(info) {
  return {
    type: types.ADD_WEIGHT_SUCCESS,
    info,
  };
}

export function addWeightFailed(info) {
  return {
    type: types.ADD_WEIGHT_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getWeightListRequest(info) {
  return {
    type: types.GET_WEIGHT_LIST_REQUEST,
    info,
  };
}

export function getWeightListSuccess(info) {
  return {
    type: types.GET_WEIGHT_LIST_SUCCESS,
    info,
  };
}

export function getWeightListFailed(info) {
  return {
    type: types.GET_WEIGHT_LIST_FAILED,
    info,
  };
}

// ---------------------------------------------

export function addCheatMealRequest(info) {
  return {
    type: types.ADD_CHEAT_MEAL_REQUEST,
    info,
  };
}

export function addCheatMealSuccess(info) {
  return {
    type: types.ADD_CHEAT_MEAL_SUCCESS,
    info,
  };
}

export function addCheatMealFailed(info) {
  return {
    type: types.ADD_CHEAT_MEAL_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getCheatMealListRequest(info) {
  return {
    type: types.GET_CHEAT_MEAL_LIST_REQUEST,
    info,
  };
}

export function getCheatMealListSuccess(info) {
  return {
    type: types.GET_CHEAT_MEAL_LIST_SUCCESS,
    info,
  };
}

export function getCheatMealListFailed(info) {
  return {
    type: types.GET_CHEAT_MEAL_LIST_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getReportDataRequest(info) {
  return {
    type: types.GET_REPORT_DATA_REQUEST,
    info,
  };
}

export function getReportDataSuccess(info) {
  return {
    type: types.GET_REPORT_DATA_SUCCESS,
    info,
  };
}

export function getReportDataFailed(info) {
  return {
    type: types.GET_REPORT_DATA_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getUserLastWeightRequest(info) {
  return {
    type: types.GET_USER_LAST_WEIGHT_REQUEST,
    info,
  };
}

export function getUserLastWeightSuccess(info) {
  return {
    type: types.GET_USER_LAST_WEIGHT_SUCCESS,
    info,
  };
}

export function getUserLastWeightFailed(info) {
  return {
    type: types.GET_USER_LAST_WEIGHT_FAILED,
    info,
  };
}

// ---------------------------------------------

export function getUserPredictionDataRequest(info) {
  return {
    type: types.GET_USER_PREDICTION_DATA_REQUEST,
    info,
  };
}

export function getUserPredictionDataSuccess(info) {
  return {
    type: types.GET_USER_PREDICTION_DATA_SUCCESS,
    info,
  };
}

export function getUserPredictionDataFailed(info) {
  return {
    type: types.GET_USER_PREDICTION_DATA_FAILED,
    info,
  };
}

// ---------------------------------------------
