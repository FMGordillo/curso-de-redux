import { createSlice } from "@reduxjs/toolkit";
import * as status from "../status";

export const initialState = {
  data: [],
  selectedUser: {},
  status: status.IDLE,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUserRequested(state, _action) {
      return { ...state, status: status.LOADING };
    },
    fetchUserSuccess(state, action) {
      return {
        ...state,
        selectedUser: action.payload,
        status: status.SUCCESS,
        error: null,
      };
    },
    fetchUserFailed(state, _action) {
      return { ...state, status: status.FAILURE, error: true };
    },

    fetchUsersRequested(state, _action) {
      return { ...state, status: status.LOADING };
    },
    fetchUsersSuccess(state, action) {
      return {
        ...state,
        data: action.payload,
        status: status.SUCCESS,
        error: null,
      };
    },
    fetchUsersFailed(state, _action) {
      return { ...state, status: status.FAILURE, error: true };
    },
  },
});

export const fetchUser = (id) => async (dispatch) => {
  dispatch(fetchUserRequested);
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();

    if (Object.keys(data).length === 0) {
      throw new Error("No user was found");
    }

    dispatch(fetchUserSuccess(data));
  } catch (error) {
    console.info("Error while fetching user", error);
    dispatch(fetchUserFailed(error));
  }
};

export const fetchUsers = () => async (dispatch) => {
  // @ts-ignore
  dispatch(fetchUsersRequested());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    if (Object.keys(data).length === 0) {
      throw new Error("No data! That's odd");
    }

    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    console.info("Error while fetching users", error);
    dispatch(fetchUsersFailed(error));
  }
};
export const {
  fetchUserFailed,
  fetchUserRequested,
  fetchUserSuccess,
  fetchUsersFailed,
  fetchUsersRequested,
  fetchUsersSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
