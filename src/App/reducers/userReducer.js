import { FETCH_USERS, GET_USERS } from "../actions";

const INITIAL_STATE = {
  data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return state.data;
    case FETCH_USERS:
     return { ...state, data: action.payload }
    default:
      return state;
  }
};

export default reducer;
