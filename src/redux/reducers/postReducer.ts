import * as STATUS from "../../status";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  posts: [],
  status: STATUS.IDLE,
  error: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostRequested(state) {
      return { ...state, status: STATUS.LOADING };
    },
    fetchPostSuccess(state, action) {
      return {
        ...state,
        posts: action.payload,
        status: STATUS.SUCCESS,
        error: null,
      };
    },
    fetchPostFailed(state, action) {
      console.error(action.payload);
      return { ...state, posts: [], status: STATUS.FAILURE, error: true };
    },
  },
});

export const { fetchPostFailed, fetchPostRequested, fetchPostSuccess } =
  postSlice.actions;

export const fetchPosts = (userId) => async (dispatch) => {
  dispatch(fetchPostRequested());
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await data.json();
    dispatch(fetchPostSuccess(posts));
  } catch (error) {
    console.info("Error while fetching posts", error);
    dispatch(fetchPostFailed(error));
  }
};

export default postSlice.reducer;
