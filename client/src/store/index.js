import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import chapReducer from "./reducers/chapReducer";

export const store = createStore(
  combineReducers({
    chapState: chapReducer,
  }),
  applyMiddleware(thunk)
);
