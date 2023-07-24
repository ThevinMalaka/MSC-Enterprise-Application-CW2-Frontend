/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeLatest } from "redux-saga/effects";

import * as types from "../actionTypes";
import {
  workoutPlanEnrollFunction,
  getWorkoutPlanListFunction,
  getWorkoutPlanDetailsFunction,
  getUserEnrolledWorkoutPlanFunction,
  completeWorkoutFunction,
  addWeightFunction,
  getWeightListFunction,
  addCheatMealFunction,
  getCheatMealListFunction,
  getUserLastWeightFunction,
  getReportDataFunction,
  getPredictionDataFunction,
} from "./homeSaga";

export const homeSaga = [
  takeLatest(types.WORKOUT_PLAN_ENROLL_REQUEST, workoutPlanEnrollFunction),
  takeLatest(types.GET_WORKOUT_PLAN_LIST_REQUEST, getWorkoutPlanListFunction),
  takeLatest(
    types.GET_WORKOUT_PLAN_DETAILS_REQUEST,
    getWorkoutPlanDetailsFunction
  ),
  takeLatest(
    types.GET_USER_ENROLLED_WORKOUT_PLAN_REQUEST,
    getUserEnrolledWorkoutPlanFunction
  ),
  takeLatest(types.SUBMIT_COMPLETED_WORKOUT_REQUEST, completeWorkoutFunction),
  takeLatest(types.ADD_WEIGHT_REQUEST, addWeightFunction),
  takeLatest(types.GET_USER_LAST_WEIGHT_REQUEST, getUserLastWeightFunction),
  takeLatest(types.GET_WEIGHT_LIST_REQUEST, getWeightListFunction),
  takeLatest(types.ADD_CHEAT_MEAL_REQUEST, addCheatMealFunction),
  takeLatest(types.GET_CHEAT_MEAL_LIST_REQUEST, getCheatMealListFunction),
  takeLatest(types.GET_REPORT_DATA_REQUEST, getReportDataFunction),
  takeLatest(types.GET_USER_PREDICTION_DATA_REQUEST, getPredictionDataFunction),
];
