import { __Login } from "../../services";
import { GET_SERVERS } from "../types";
export const LoginUser = (formData) => async (dispatch) => {
  try {
    const user = await __Login(formData);
    console.log(user);
    dispatch({ type: GET_SERVERS, payload: user.user.servers });
    return user;
  } catch (error) {
    console.log(error.message);
    // Add In Error state for error handling
  }
};
