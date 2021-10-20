import * as status from "./status";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USERS,
    payload: { data: [], status: status.LOADING_STATUS }
  })
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({
      type: FETCH_USERS,
      payload: { data, status: status.SUCCESS_STATUS },
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS,
      payload: { data: [], status: status.FAILURE_STATUS }
    })
  }
};
