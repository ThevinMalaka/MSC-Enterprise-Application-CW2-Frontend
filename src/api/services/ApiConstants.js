export default {
  // BASE_URL: "http://localhost:5166",
  // USER_REGISTER: "api/User/create",
  // USER_LOGIN: "/api/User/login",
  // WORKOUT_PLAN: "/api/WorkoutPlan",
  // WORKOUT_PLAN_ENROLL: "api/UserWorkoutEnrollment/single",
  // WORKOUT: "/api/Workout",
  // USER_ENROLLED_WORKOUT_PLAN: "/api/UserWorkoutEnrollment/user",
  // COMPLETE_WORKOUT: "api/UserWorkoutEnrollment/complete",
  // WEIGHT: "/api/UserWeight",
  // CHEAT_MEAL: "/api/CheatMeal",
  // REPORT: "/api/Report/User",

  // BASE_URL: "https://localhost:7053",
  BASE_URL: "https://fitnessappapigateway.azurewebsites.net",

  //User Service
  USER_REGISTER: "/user/User/create",
  USER_LOGIN: "/user/User/login",
  WEIGHT: "/user/UserWeight",
  ALL_WEIGHT: "/user/UserWeight/all",
  LAST_WEIGHT: "/user/UserWeight/latestWeight",
  CHEAT_MEAL: "/user/CheatMeal",
  // Workout Service
  WORKOUT_PLAN: "/workout/WorkoutPlan",
  WORKOUT_PLAN_ENROLL: "workout/UserWorkoutEnrollment/single",
  WORKOUT: "/workout/Workout",
  USER_ENROLLED_WORKOUT_PLAN: "/workout/UserWorkoutEnrollment/user",
  COMPLETE_WORKOUT: "workout/UserWorkoutEnrollment/complete",
  REPORT: "/workout/Report",
  PREDICTION: "/workout/Prediction",
};
