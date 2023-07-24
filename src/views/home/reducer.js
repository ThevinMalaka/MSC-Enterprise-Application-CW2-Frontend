import createReducer from "../../utils/createReducer";
import * as types from "./actionTypes";
import { REPORTS, PREDICTIONS } from "../../hooks/constant";

const initialState = {
  isLoggedIn: false,
  workoutPlanList: [],
  workoutPlanEnroll: false,
  submitCompletedWorkoutStatus: false,
  userWeightList: [],
  cheatMealList: [],
  userReportData: "",
  userPredictionData: {
    date: Date.now(),
    weight: "",
  },
  userLastWeight: 0,
};

export const homeReducers = createReducer(initialState, {
  [types.GET_WORKOUT_PLAN_LIST_SUCCESS](state, action) {
    return {
      ...state,
      workoutPlanList: action.info,
    };
  },
  [types.GET_WORKOUT_PLAN_DETAILS_SUCCESS](state, action) {
    return {
      ...state,
      workoutPlanDetails: action.info,
    };
  },
  [types.GET_WORKOUT_PLAN_LIST_REQUEST](state, action) {
    return {
      ...state,
      workoutPlanEnroll: false, // reset
      submitCompletedWorkoutStatus: false, // reset
    };
  },
  [types.WORKOUT_PLAN_ENROLL_SUCCESS](state, action) {
    return {
      ...state,
      workoutPlanEnroll: true,
    };
  },
  [types.GET_USER_ENROLLED_WORKOUT_PLAN_SUCCESS](state, action) {
    return {
      ...state,
      userEnrolledWorkoutPlan: action.info,
    };
  },
  [types.SUBMIT_COMPLETED_WORKOUT_SUCCESS](state, action) {
    return {
      ...state,
      submitCompletedWorkoutStatus: true,
    };
  },
  [types.GET_WEIGHT_LIST_SUCCESS](state, action) {
    return {
      ...state,
      userWeightList: action.info,
    };
  },
  [types.GET_USER_LAST_WEIGHT_SUCCESS](state, action) {
    return {
      ...state,
      userLastWeight: action.info,
    };
  },
  [types.GET_CHEAT_MEAL_LIST_SUCCESS](state, action) {
    return {
      ...state,
      cheatMealList: action.info,
    };
  },
  [types.GET_REPORT_DATA_SUCCESS](state, action) {
    return {
      ...state,
      userReportData: action.info,
    };
  },
  [types.GET_USER_PREDICTION_DATA_SUCCESS](state, action) {
    return {
      ...state,
      userPredictionData: action.info,
    };
  },
  [types.GET_USER_PREDICTION_DATA_FAILED](state, action) {
    return {
      ...state,
      userPredictionData: {
        date: Date.now(),
        weight: "",
      },
    };
  },
});
