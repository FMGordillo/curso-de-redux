import { FETCH_USERS, GET_USERS } from "../actions";

const INITIAL_STATE = {
  users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case FETCH_USERS:
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((body) => body.json())
        .then((data) => data)
        .catch((err) => {
          console.log("Error while fetching users", err);
          return [];
        });
    default:
      return state;
  }
};

export default reducer;
