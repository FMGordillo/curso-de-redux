import * as status from "../actions/status";
import { FETCH_USER, FETCH_USERS } from "../actions";

export const userReducerInitialState = {
  data: [],
  selectedUser: {},
  status: status.IDLE_STATUS,
  error: false,
};

const reducer = (state = userReducerInitialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload };
    case FETCH_USERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
