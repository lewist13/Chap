const {
  CREATE_SERVER,
  GET_SERVER_BY_ID,
  UPDATE_SERVER,
  DELETE_SERVER,
  GET_CHANNELS,
} = require("../types");

const initialState = {
  oneServer: {},
  allServers: [],
  // get: {},
  // update: {},
  // deleter: {},
  allChannels: [],
  oneChannel: {},
};

export default function ServerReducer(state = initialState, action) {
  switch (action.type) {
    // one server
    // all servers
    case GET_SERVER_BY_ID:
      return { ...state, oneServer: action.payload };
    default:
      return { ...state };
  }
}
