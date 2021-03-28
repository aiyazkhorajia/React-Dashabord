import { ADD_POST, UPDATE_POST, REMOVE_POST, FETCH_POST } from "../constants";

export const addPost = (data) => ({
  type: ADD_POST,
  data
});

export const updatePost = (data) => ({
  type: UPDATE_POST,
  data
});

export const removePost = (data) => ({
  type: REMOVE_POST,
  data
});

export const fetchPosts = () => ({
  type: FETCH_POST
});
