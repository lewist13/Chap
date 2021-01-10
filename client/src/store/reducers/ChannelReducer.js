// store messages
// separate reducer for message control
// KEEP SIMPLE PLSSSSSS
const { GET_CHANNELS, GET_MESSAGES, SET_CHANNEL } = require("../types");

const initialState = {
  channels: [],
  selectedChannel: {},
  messages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHANNELS:
      return { ...state, channels: action.payload };
    case SET_CHANNEL:
      return { ...state, selectedChannel: action.payload };
    case GET_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return { ...state };
  }
}
