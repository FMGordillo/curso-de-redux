import { POST_ACTIONS } from "../actions";
import * as status from "../actions/status";

export const postReducerInitialState = {
  posts: [],
  status: status.IDLE_STATUS,
  error: false,
};

const reducer = (state = postReducerInitialState, action) => {
  switch (action.type) {
    case POST_ACTIONS.FETCH_POSTS_REQUEST:
      return { ...state, status: status.LOADING_STATUS };
    case POST_ACTIONS.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, status: status.SUCCESS_STATUS };
    case POST_ACTIONS.FETCH_POSTS_FAILURE:
      // TODO: Donde pongo el `error`?
      return {
        ...state,
        posts: [],
        status: status.FAILURE_STATUS,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
