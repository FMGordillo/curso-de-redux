import { POST_ACTIONS } from "../actions";
import * as STATUS from "../actions/status";

export const postReducerInitialState = {
  posts: [],
  status: STATUS.IDLE,
  error: false,
};

const reducer = (state = postReducerInitialState, action) => {
  switch (action.type) {
    case POST_ACTIONS.FETCH_POSTS_REQUEST:
      return { ...state, status: STATUS.LOADING };
    case POST_ACTIONS.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, status: STATUS.SUCCESS };
    case POST_ACTIONS.FETCH_POSTS_FAILURE:
      // TODO: Donde pongo el `error`?
      return {
        ...state,
        posts: [],
        status: STATUS.FAILURE,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
