const { GET_MESSAGES, SET_MESSAGE } = require("../types");

const initialState = {
  messages: [],
  selectedMessage: {},
  //   messages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case GET_CHANNELS:
    //   return { ...state, channels: action.payload };
    case SET_MESSAGE:
      return { ...state, selectedMessage: action.payload };
    case GET_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return { ...state };
  }
}
