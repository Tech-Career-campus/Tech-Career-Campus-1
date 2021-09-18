import fetcher from "../../utils/fetcher";
import {
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
  START_LOADING,
  STOP_LOADING,
  FETCH_POST,
} from "../actions/types";

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  await fetcher(`http://localhost:8080/api/forum/${id}`)
    .then((response) => {
      dispatch({
        type: FETCH_POST,
        payload: response,
      });
    })
    .catch((err) => console.log(err));
  dispatch({ type: STOP_LOADING });
};

export const getPosts = (page) => async (dispatch) => {

  dispatch({ type: START_LOADING });
  await fetcher(`http://localhost:8080/api/forum?page=${page}`)
    .then((response) => {
      dispatch({
        type: FETCH_ALL,
        payload: response,
      });
    })
    .catch((err) => console.log(err));
  dispatch({ type: STOP_LOADING });
};

export const createPostStaff = (post,history) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    await fetch(`http://localhost:8080/api/forum/staff`, {
      method: "POST",
      body: JSON.stringify({
        post,
        _id: "612416b7721110539c4ebf44",
        role: "Staff",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        history.push(`/forum/${res.post._id}`)
        dispatch({
          type: CREATE,
          payload: res.data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const createPostStudent = (post,history) => async (dispatch) => {
  try {
    await fetch(`http://localhost:8080/api/forum/student`, {
      method: "POST",
      body: JSON.stringify({
        post,
        _id: "612416b7721110539c4ebf44",
        role: "Staff",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        history.push(`/forum/${res.data._id}`)
        dispatch({
          type: CREATE,
          payload: res.data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    await fetch(`http://localhost:8080/api/forum/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        post,
        _id: "612416b7721110539c4ebf44",
        role: "Staff",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: UPDATE,
          payload: res.data,
        })
      );
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:8080/api/forum/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: DELETE,
          payload: res.data.id,
        })
      );
  } catch (error) {
    console.log(error);
  }
};
