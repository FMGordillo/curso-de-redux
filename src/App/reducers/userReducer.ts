import * as status from "../actions/status";
import { USER_ACTIONS } from "../actions";

export const userReducerInitialState = {
  data: [],
  selectedUser: {},
  status: status.IDLE,
  error: false,
};

const reducer = (state = userReducerInitialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.FETCH_USER_REQUEST:
      return { ...state, status: status.LOADING };
    case USER_ACTIONS.FETCH_USER_SUCCESS:
      return { ...state, selectedUser: action.payload, status: status.SUCCESS };
    case USER_ACTIONS.FETCH_USER_FAILURE:
      return { ...state, status: status.FAILURE, error: true };

    case USER_ACTIONS.FETCH_USERS_REQUEST:
      return { ...state, status: status.LOADING };
    case USER_ACTIONS.FETCH_USERS_SUCCESS:
      return { ...state, data: action.payload, status: status.SUCCESS };
    case USER_ACTIONS.FETCH_USERS_FAILURE:
      return { ...state, status: status.FAILURE, error: true };
    default:
      return state;
  }
};

export default reducer;
