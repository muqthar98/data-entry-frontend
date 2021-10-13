import axios from "axios";
import {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
} from "../constants/userConstants";

export const getUserDetails = async (dispatch) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });

  const { data } = await axios.get("http://localhost:5000/user/get");

  dispatch({
    type: GET_USERS_SUCCESS,
    payload: data,
  });
  dispatch({
    type: GET_USERS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
};

export const addUser = async (dispatch) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });

  const { data } = await axios.get("http://localhost:5000/user/get");

  dispatch({
    type: GET_USERS_SUCCESS,
    payload: data,
  });
  dispatch({
    type: GET_USERS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
};
