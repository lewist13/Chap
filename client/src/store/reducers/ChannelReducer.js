// store messages
// separate reducer for message control
// KEEP SIMPLE PLSSSSSS
const { GET_CHANNELS, GET_MESSAGES } = require("../types");

const initialState = {
  channels: [],
  messages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHANNELS:
      return { ...state, channels: action.payload };
    case GET_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return { ...state };
  }
}
