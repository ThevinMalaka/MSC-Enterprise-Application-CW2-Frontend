import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import * as loginReducers from "../../views/login/reducer";
import * as homeReducers from "../../views/home/reducer";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  loginReducers: loginReducers.loginReducers,
  homeReducers: homeReducers.homeReducers,
});

export default rootReducer;
