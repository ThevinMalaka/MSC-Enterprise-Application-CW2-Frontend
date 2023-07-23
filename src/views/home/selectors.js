export const getIsLoggedIn = (state) => state.homeReducers.isLoggedIn;
export const getLoggedUserData = (state) => state.loginReducers.loggedUserData;

export const getWorkoutPlanList = (state) => state.homeReducers.workoutPlanList;
export const getWorkoutPlanDetails = (state) =>
  state.homeReducers.workoutPlanDetails;
export const getWorkoutPlanEnroll = (state) =>
  state.homeReducers.workoutPlanEnroll;
export const userEnrolledWorkoutPlanData = (state) =>
  state.homeReducers.userEnrolledWorkoutPlan;
export const completedWorkoutStatus = (state) =>
  state.homeReducers.submitCompletedWorkoutStatus;
export const userWeightList = (state) => state.homeReducers.userWeightList;
export const userLastWeight = (state) => state.homeReducers.userLastWeight;
export const userPredictionData = (state) =>
  state.homeReducers.userPredictionData;
export const cheatMealList = (state) => state.homeReducers.cheatMealList;
export const userReportData = (state) => state.homeReducers.userReportData;
