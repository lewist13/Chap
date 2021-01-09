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
  get: {},
  update: {},
  deleter: {},
  allChannels: [],
  oneChannel: {},
};

export default function ServerReducer(state = initialState, action) {
  switch (action.type) {
    // one server
    // all servers
    case CREATE_SERVER:
      return { ...state, server: [...action.payload] };
    case GET_SERVER_BY_ID:
      return { ...state, get: [...action.payload] };
    case UPDATE_SERVER:
      return { ...state, update: [...action.payload] };
    // case DELETE_SERVER:
    //   let filterServers = state.allServers.filter(allServers, server.id) => server.id !== action.id
    //   return { ...state, allServers: filterServers };
    default:
      return { ...state };

    case GET_CHANNELS:
      return { ...state, channels: [...action.payload] };
  }
}
