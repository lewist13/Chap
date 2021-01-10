const {
  CREATE_SERVER,
  GET_SERVER_BY_ID,
  UPDATE_SERVER,
  DELETE_SERVER,
  GET_CHANNELS,
  GET_SERVERS,
  SET_SERVER,
} = require("../types");

const initialState = {
  selectedServer: {},
  servers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SERVERS:
      return { ...state, servers: action.payload };
    case SET_SERVER:
      return { ...state, selectedServer: action.payload };
    // one server
    // all servers
    // case CREATE_SERVER
    //   return { ...state, server: [...action.payload] };
    // case GET_SERVER_BY_ID:
    //   return { ...state, get: [...action.payload] };
    // case DELETE_SERVER:
    //   let filterServers = state.allServers.filter(allServers, server.id) => server.id !== action.id
    //   return { ...state, allServers: filterServers };
    // case GET_CHANNELS:
    //   return { ...state, channels: [...action.payload] };
    default:
      return { ...state };
  }
}
