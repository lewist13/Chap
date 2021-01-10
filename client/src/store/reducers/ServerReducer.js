const { GET_SERVERS, SET_SERVER } = require("../types");

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
    default:
      return { ...state };
  }
}
