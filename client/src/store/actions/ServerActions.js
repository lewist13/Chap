import {
  __CreateServer,
  __GetServerById,
  __UpdateServer,
  __DeleteServer,
} from "../../services/index";
import {
  CREATE_SERVER,
  GET_SERVER_BY_ID,
  UPDATE_SERVER,
  DELETE_SERVER,
  GET_CHANNELS,
  SET_SERVER,
} from "../types";

export const createServer = (formData) => async (dispatch) => {
  try {
    const server = await __CreateServer(formData);
    dispatch({
      tpye: CREATE_SERVER,
      payload: server,
    });
  } catch (error) {}
};

export const getServer = (server_id) => async (dispatch) => {
  try {
    const get = await __GetServerById(server_id);
    console.log(get);
    dispatch({
      type: GET_SERVER_BY_ID,
      payload: get,
    });
  } catch (error) {
    throw error;
  }
};

export const updateServer = (server_id) => async (dispatch) => {
  try {
    const update = await __UpdateServer(server_id);
    console.log(update);
    dispatch({
      type: UPDATE_SERVER,
      payload: update,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteServer = (server_id) => async (dispatch) => {
  try {
    const deleter = await __DeleteServer(server_id);
    console.log(deleter);
    dispatch({
      type: DELETE_SERVER,
      payload: deleter,
    });
  } catch (error) {
    throw error;
  }
};

export const SetServer = (server) => ({
  type: SET_SERVER,
  payload: server,
});

// export const getChannels = () => async (dispatch) => {
//   try {
//     const channels = await GetChannels();
//     console.log(channels);
//     dispatch({
//       type: GET_CHANNELS,
//       payload: channels.results,
//     });
//   } catch (error) {
//     throw error;
//   }
// };
