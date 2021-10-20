export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const USER_ACTIONS = {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
};

export const fetchUser = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_USER_REQUEST,
  });
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();

    if (Object.keys(data).length === 0) {
      throw new Error("No user was found");
    }

    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.info("Error while fetching user", error);
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error,
    });
  }
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USERS_REQUEST,
  });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    if (Object.keys(data).length === 0) {
      throw new Error("No data! That's odd");
    }

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.info("Error while fetching users", error);
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: error,
    });
  }
};
