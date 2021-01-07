const { GET_SERVERS, GET_CHANNELS } = require("../types");

const initialState = {
  servers: [],
  channels: [],
};

export const ChapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVERS:
      return { ...state, servers: [...action.payload] };
    case GET_CHANNELS:
      return { ...state, channels: [...action.payload] };
  }
};
