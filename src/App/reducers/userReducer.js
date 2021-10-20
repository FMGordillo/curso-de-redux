import { GET_USERS } from "../actions";

const INITIAL_STATE = {
  users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default reducer;