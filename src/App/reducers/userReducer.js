import * as status from "../actions/status";
import { FETCH_USERS } from "../actions";

const INITIAL_STATE = {
  data: [],
  status: status.IDLE_STATUS,
  error: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
