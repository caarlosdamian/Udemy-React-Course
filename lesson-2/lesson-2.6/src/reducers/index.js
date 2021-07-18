import counterReducer from "./counterReducer";
import loginReducer from "./loginreducer";
import { combineReducers } from "redux";
const allreducers = combineReducers({
  counter: counterReducer,
  login: loginReducer,
});

export default allreducers