export const GET_USERS = "GET_USERS";
export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async dispatch => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json();
  dispatch({ type: FETCH_USERS,  payload: data });
}