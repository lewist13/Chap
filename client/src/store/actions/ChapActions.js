import { GetServers, GetChannels } from "../services/index";
import { GET_SERVERS, GET_CHANNELS } from "../types";

export const getServers = () => async (dispatch) => {
  try {
    const servers = await GetServers();
    console.log(servers);
    dispatch({
      type: GET_SERVERS,
      payload: servers.results,
    });
  } catch (error) {
    throw error;
  }
};
export const getChannels = () => async (dispatch) => {
  try {
    const channels = await GetChannels();
    console.log(channels);
    dispatch({
      type: GET_CHANNELS,
      payload: channels.results,
    });
  } catch (error) {
    throw error;
  }
};
