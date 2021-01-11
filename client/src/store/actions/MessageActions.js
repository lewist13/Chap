import { __GetMessages } from "../../services/index";

import { GET_MESSAGES, SET_MESSAGE } from "../types";

export const getMessages = (message_id) => async (dispatch) => {
  try {
    const get = await __GetMessages(message_id);
    console.log(get);
    dispatch({
      type: GET_MESSAGES,
      payload: get,
    });
  } catch (error) {
    throw error;
  }
};

export const SetMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});
