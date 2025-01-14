// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import auth from "./auth";
import category from "./category";
import test from "./test";
import habit from "./habit";
import address from "./address";
import healthPackages from "./healthPackages";
import booking from "./booking";
import lab from "./lab";
import coupon from "./coupon";
import banner from "./banner";
import member from "./member";
import cart from "./cart";
import healthrisk from "./healthRisk";
import bookTest from "./booktest";
import feedbackReducer from "./feedback";
import homepage from "./homepage";
import manageCommonVarReducer from "./common";
import biowaste from "./biowaste";

const rootReducer = combineReducers({
  manageCommonVarReducer,
  auth,
  category,
  test,
  healthPackages,
  habit,
  address,
  booking,
  lab,
  coupon,
  banner,
  member,
  cart,
  healthrisk,
  bookTest,
  feedbackReducer,
  homepage,
  biowaste,
});

export default rootReducer;
