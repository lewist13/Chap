import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ServerReducer from "./reducers/ServerReducer";
// import ChannelReducer from "./reducers/ChannelReducer";

const store = createStore(
  combineReducers({
    serverState: ServerReducer,
    // channelState: ChannelReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
