import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ChapReducer from "./reducers/ChapReducer";

export const store = createStore(
  combineReducers({
    chapState: ChapReducer,
  }),
  applyMiddleware(thunk)
);
